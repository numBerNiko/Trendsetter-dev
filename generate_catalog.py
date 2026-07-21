from reportlab.lib.pagesizes import letter
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Image as RLImage, Table, TableStyle
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.units import inch
from reportlab.lib import colors
import os

def generate_pdf(output_path, logo_path):
    doc = SimpleDocTemplate(
        output_path,
        pagesize=letter,
        rightMargin=0.5*inch,
        leftMargin=0.5*inch,
        topMargin=2.4*inch, # Increased margin for the extra header line
        bottomMargin=0.5*inch
    )
    
    styles = getSampleStyleSheet()
    
    # Custom Styles
    styles.add(ParagraphStyle(
        name='CompanyHeader',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=18,
        spaceAfter=12, # Distinct bottom margin for breathing room
        alignment=2, # Right-aligned to match screenshot
        textColor=colors.HexColor('#0B2559') # Navy Blue from brand
    ))
    styles.add(ParagraphStyle(
        name='ContactInfo',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9,
        spaceAfter=4,
        leading=14, # Increased line-height for readability
        alignment=2, # Right-aligned
        textColor=colors.HexColor('#333333')
    ))
    styles.add(ParagraphStyle(
        name='SectionTitle',
        parent=styles['Heading2'],
        fontName='Helvetica-Bold',
        fontSize=12,
        spaceBefore=16,
        spaceAfter=8,
        textColor=colors.white,
        backColor=colors.HexColor('#0B2559'), # Blue banner background
        borderPadding=6,
        alignment=1 # Center aligned banner
    ))
    styles.add(ParagraphStyle(
        name='SectionDesc',
        parent=styles['Normal'],
        fontName='Helvetica-Oblique',
        fontSize=9,
        spaceAfter=10,
        textColor=colors.HexColor('#333333'),
        backColor=colors.HexColor('#FDFBF7'), # Soft warm background
        borderColor=colors.HexColor('#8C6D53'), # Taupe border
        borderWidth=1,
        borderPadding=6
    ))
    styles.add(ParagraphStyle(
        name='GeneralNotes',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9,
        spaceAfter=2,
        textColor=colors.HexColor('#333333'),
    ))
    
    # Custom Info Block for General Notes to give it the panel look
    styles.add(ParagraphStyle(
        name='InfoBlock',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9,
        spaceAfter=10,
        leading=14,
        textColor=colors.HexColor('#333333'),
        backColor=colors.HexColor('#FDFBF7'),
        borderColor=colors.HexColor('#8C6D53'),
        borderWidth=1,
        borderPadding=8
    ))
    
    # Table Styles
    base_table_style = TableStyle([
        # Table Header Styling (Navy Blue with White Text)
        ('BACKGROUND', (0, 0), (-1, 0), colors.HexColor('#0B2559')),
        ('TEXTCOLOR', (0, 0), (-1, 0), colors.white),
        ('ALIGN', (0, 0), (-1, 0), 'CENTER'),
        ('FONTNAME', (0, 0), (-1, 0), 'Helvetica-Bold'),
        ('FONTSIZE', (0, 0), (-1, 0), 10),
        ('BOTTOMPADDING', (0, 0), (-1, 0), 8),
        ('TOPPADDING', (0, 0), (-1, 0), 8),
        
        # Column alignments
        ('ALIGN', (0, 1), (0, -1), 'CENTER'), # SL column center
        ('ALIGN', (1, 1), (1, -1), 'LEFT'),   # Description left
        ('ALIGN', (2, 1), (-1, -1), 'CENTER'), # Others center
        
        # Data Rows Styling
        ('FONTNAME', (0, 1), (-1, -1), 'Helvetica-Bold'),
        ('FONTSIZE', (0, 1), (-1, -1), 9),
        ('BOTTOMPADDING', (0, 1), (-1, -1), 6),
        ('TOPPADDING', (0, 1), (-1, -1), 6),
        
        # Grid Lines (Taupe/Brown Accent Border)
        ('GRID', (0, 0), (-1, -1), 0.5, colors.HexColor('#8C6D53')),
        ('BOX', (0, 0), (-1, -1), 1, colors.HexColor('#8C6D53')),
        
        # Alternating Rows (Warm Tint)
        ('ROWBACKGROUNDS', (0, 1), (-1, -1), [colors.white, colors.HexColor('#F9F6F0')])
    ])

    story = []

    # 1. Logo & Header Layout using a Table for side-by-side (Moved to repeating header)
    header_data = [
        [
            RLImage(logo_path, width=2.5*inch, height=1.0*inch, kind='proportional') if os.path.exists(logo_path) else "",
            [
                Paragraph("TRENDSETTER TEXTILES, INC.", styles['CompanyHeader']),
                Paragraph("Elite Globus Compound Warehouse 24, Brgy. Maguyam, Silang, Cavite", styles['ContactInfo']),
                Paragraph("Company WhatsApp: +63 952 468 4603 (Via WhatsApp only)", styles['ContactInfo']),
                Paragraph("Email: customerservice@trendsettertextiles.com", styles['ContactInfo']),
                Paragraph("Websites: www.trendsettertextiles.com (US) | ph.trendsettertextiles.com (PH)", styles['ContactInfo'])
            ]
        ]
    ]
    header_table = Table(header_data, colWidths=[3*inch, 4.5*inch])
    header_table.setStyle(TableStyle([
        ('ALIGN', (0,0), (0,0), 'LEFT'),
        ('ALIGN', (1,0), (1,0), 'RIGHT'),
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('LINEBELOW', (0,0), (-1,0), 3, colors.HexColor('#0B2559')), # Thick Navy Blue line under header
        ('BOTTOMPADDING', (0,0), (-1,0), 16), # Increased padding above divider line
    ]))
    
    def add_header(canvas, doc):
        canvas.saveState()
        header_w, header_h = header_table.wrap(doc.width, doc.topMargin)
        # Position header at 0.5 inches from the top edge of the page
        header_table.drawOn(canvas, doc.leftMargin, doc.pagesize[1] - 0.5*inch - header_h)
        canvas.restoreState()

    # 2. General Notes
    story.append(Paragraph("GENERAL NOTES", styles['SectionTitle']))
    notes_html = (
        "• All item sizes and dimensions are specified in inches.<br/>"
        "• Prices are subject to adjustment in the event of customized sizes or designs.<br/>"
        "• Labels and laundry tags are included."
    )
    story.append(Paragraph(notes_html, styles['InfoBlock']))

    # 3. Bed Linens Table
    story.append(Paragraph("BED LINENS COLLECTION", styles['SectionTitle']))
    story.append(Paragraph("Fabric Material: 100% Cotton Plain - White (Available Designs: Plain White, 1cm Stripe, 3cm Stripe)", styles['SectionDesc']))
    
    bed_data = [
        ['SL', 'DESCRIPTION', 'SIZE', 'AVAILABLE THREAD COUNTS'],
        ['1', 'FLAT SHEET - SINGLE', '65x95', '300TC, 400TC, 500TC, 600TC'],
        ['2', 'FLAT SHEET - SEMI DOUBLE', '74x95', '300TC, 400TC, 500TC, 600TC'],
        ['3', 'FLAT SHEET - DOUBLE', '84x95', '300TC, 400TC, 500TC, 600TC'],
        ['4', 'FLAT SHEET - QUEEN', '92x95', '300TC, 400TC, 500TC, 600TC'],
        ['5', 'FLAT SHEET - KING', '110x108', '300TC, 400TC, 500TC, 600TC'],
        ['6', 'FITTED SHEET - SINGLE', '39x78x6', '300TC, 400TC, 500TC, 600TC'],
        ['7', 'FITTED SHEET - SEMI DOUBLE', '42x78x6', '300TC, 400TC, 500TC, 600TC'],
        ['8', 'FITTED SHEET - DOUBLE', '54x78x6', '300TC, 400TC, 500TC, 600TC'],
        ['9', 'FITTED SHEET - QUEEN', '60x78x6', '300TC, 400TC, 500TC, 600TC'],
        ['10', 'FITTED SHEET - KING', '80x78x6', '300TC, 400TC, 500TC, 600TC'],
        ['11', 'DUVET COVER - SINGLE', '65x94', '300TC, 400TC, 500TC, 600TC'],
        ['12', 'DUVET COVER - SEMI DOUBLE', '72x93', '300TC, 400TC, 500TC, 600TC'],
        ['13', 'DUVET COVER - DOUBLE', '84x93', '300TC, 400TC, 500TC, 600TC'],
        ['14', 'DUVET COVER - QUEEN', '90x96', '300TC, 400TC, 500TC, 600TC'],
        ['15', 'DUVET COVER - KING', '108x94', '300TC, 400TC, 500TC, 600TC'],
        ['16', 'PILLOWCASE W/ FLAP', '20x30x6', '300TC, 400TC, 500TC, 600TC'],
        ['17', 'PILLOWCASE W/ FLAP', '20x36x6', '300TC, 400TC, 500TC, 600TC'],
    ]
    t1 = Table(bed_data, colWidths=[0.5*inch, 2.5*inch, 1.2*inch, 3.3*inch])
    t1.setStyle(base_table_style)
    story.append(t1)

    # 4. Bath Linens Table
    story.append(Paragraph("BATH LINENS COLLECTION", styles['SectionTitle']))
    story.append(Paragraph("Towel Material: 100% Cotton - 21S/2 Cotton - White", styles['SectionDesc']))
    
    bath_data = [
        ['SL', 'DESCRIPTION', 'DESIGN / COLOR', 'SIZE'],
        ['1', 'BATH TOWEL - 500 grams', 'WHITE', '25x50'],
        ['2', 'BATH TOWEL - 550 grams', 'WHITE', '27x54'],
        ['3', 'BATH TOWEL - 650 grams', 'WHITE', '30x60'],
        ['4', 'BATH TOWEL - 700 grams', 'WHITE', '30x60'],
        ['5', 'BATH MAT - 200 grams', 'WHITE', '16x24'],
        ['6', 'BATH MAT W/ Greek Border - 300 grams', 'WHITE', '20x30'],
        ['7', 'HAND TOWEL - 180 grams', 'WHITE', '18x30'],
        ['8', 'FACE TOWEL - 80 grams', 'WHITE', '13x13'],
        ['9', 'POOL TOWEL - 650 grams', 'GREEN', '30x60'],
        ['10', 'POOL TOWEL - 650 grams', 'BLUE', '30x60'],
        ['11', 'POOL TOWEL - 650 grams', 'YELLOW', '30x60'],
    ]
    t2 = Table(bath_data, colWidths=[0.5*inch, 3.0*inch, 2.0*inch, 2.0*inch])
    t2.setStyle(base_table_style)
    story.append(t2)

    # Page Break to prevent splitting the last table awkwardly if it doesn't fit
    # story.append(PageBreak())

    # 5. Bed Accessories Table
    story.append(Paragraph("BED ACCESSORIES & FILLINGS", styles['SectionTitle']))
    story.append(Paragraph("Fabric Material: 100% Outer covering 300TC, Inner Fabric Mix Polycotton 120gsm (60/40)<br/>Blanket Fabric: 350GSM Polar Fleece Material (BEIGE, MOCHA, LIGHT BROWN, CAMEL BROWN)", styles['SectionDesc']))
    
    acc_data = [
        ['SL', 'DESCRIPTION', 'SIZE'],
        ['12', 'DUVET INFILL-200RFS - SINGLE', '63x90'],
        ['13', 'DUVET INFILL-200RFS - SEMI DOUBLE', '70x91'],
        ['14', 'DUVET INFILL-200RFS - DOUBLE', '82x91'],
        ['15', 'DUVET INFILL-200RFS - QUEEN', '88x94'],
        ['16', 'DUVET INFILL-200RFS - KING', '106x92'],
        ['17', 'BED ENHANCER-300TC - SINGLE (15 Boxes)', '35x78x4'],
        ['18', 'BED ENHANCER-300TC - DOUBLE (20 Boxes)', '53x75x4'],
        ['19', 'BED ENHANCER-300TC - QUEEN (25 Boxes)', '60x80x4'],
        ['20', 'BED ENHANCER-300TC - KING (30 Boxes)', '72x80x4'],
        ['21', 'BED PROTECTOR - SINGLE', '39x78'],
        ['22', 'BED PROTECTOR - SEMI DOUBLE', '42x78'],
        ['23', 'BED PROTECTOR - DOUBLE', '54x78'],
        ['24', 'BED PROTECTOR - QUEEN', '60x78'],
        ['25', 'BED PROTECTOR - KING', '72x78'],
        ['26', 'BED PROTECTOR - CALI KING', '80x78'],
        ['27', 'PILLOW PROTECTOR', '20x30'],
        ['28', 'PILLOW PROTECTOR', '20x36'],
        ['29', 'FLEECE BLANKET-350 GSM', '60x90'],
        ['30', 'FLEECE BLANKET-350 GSM', '72x90'],
        ['31', 'FLEECE BLANKET-350 GSM', '84x90'],
        ['32', 'PILLOW FIBER FILL - 1,200 GRAMS', '20x30'],
        ['33', 'PILLOW FIBER FILL - 1,400 GRAMS', '20x36'],
        ['34', 'PILLOW DOWNFIBER - 1,200 GRAMS', '20x30'],
        ['35', 'PILLOW DOWNFIBER - 1,500 GRAMS', '20x36'],
        ['36', 'BODY PILLOW - 1,500 GRAMS (SOFT)', '20x40'],
        ['37', 'BODY PILLOW - 2,500 GRAMS (FIRM)', '20x54'],
        ['38', 'PILLOW SLIP w/ Zipper', '20x30'],
        ['39', 'PILLOW SLIP w/ Zipper', '20x36'],
    ]
    t3 = Table(acc_data, colWidths=[0.5*inch, 5.0*inch, 2.0*inch])
    t3.setStyle(base_table_style)
    story.append(t3)

    doc.build(story, onFirstPage=add_header, onLaterPages=add_header)
    print(f"Structured Grid Catalog successfully generated at {output_path}")

if __name__ == "__main__":
    base_dir = os.path.dirname(os.path.abspath(__file__))
    output_pdf = os.path.join(base_dir, 'public', 'Trendsetter_Textiles_Catalog.pdf')
    logo_file = os.path.join(base_dir, 'public', 'Trendsetter-website-photos', 'Trendsetter-Logo-V3.png')
    
    generate_pdf(output_pdf, logo_file)
