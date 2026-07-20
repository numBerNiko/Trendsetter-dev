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
        topMargin=0.5*inch,
        bottomMargin=0.5*inch
    )
    
    styles = getSampleStyleSheet()
    
    # Custom Styles
    styles.add(ParagraphStyle(
        name='CompanyHeader',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=14,
        spaceAfter=4,
        alignment=1 # Center
    ))
    styles.add(ParagraphStyle(
        name='ContactInfo',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9,
        spaceAfter=2,
        alignment=1,
        textColor=colors.darkgrey
    ))
    styles.add(ParagraphStyle(
        name='SectionTitle',
        parent=styles['Heading2'],
        fontName='Helvetica-Bold',
        fontSize=12,
        spaceBefore=14,
        spaceAfter=4,
        textColor=colors.HexColor('#0f172a'),
    ))
    styles.add(ParagraphStyle(
        name='SectionDesc',
        parent=styles['Normal'],
        fontName='Helvetica-Oblique',
        fontSize=9,
        spaceAfter=8,
        textColor=colors.HexColor('#334155'),
    ))
    styles.add(ParagraphStyle(
        name='GeneralNotes',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9,
        spaceAfter=2,
    ))
    
    # Table Styles
    base_table_style = TableStyle([
        ('BACKGROUND', (0, 0), (-1, 0), colors.HexColor('#f1f5f9')),
        ('TEXTCOLOR', (0, 0), (-1, 0), colors.HexColor('#0f172a')),
        ('ALIGN', (0, 0), (-1, 0), 'CENTER'),
        ('FONTNAME', (0, 0), (-1, 0), 'Helvetica-Bold'),
        ('FONTSIZE', (0, 0), (-1, 0), 9),
        ('BOTTOMPADDING', (0, 0), (-1, 0), 8),
        ('TOPPADDING', (0, 0), (-1, 0), 8),
        
        ('ALIGN', (0, 1), (0, -1), 'CENTER'), # SL column center
        ('ALIGN', (1, 1), (1, -1), 'LEFT'),   # Description left
        ('ALIGN', (2, 1), (-1, -1), 'CENTER'), # Others center
        
        ('FONTNAME', (0, 1), (-1, -1), 'Helvetica'),
        ('FONTSIZE', (0, 1), (-1, -1), 8),
        ('BOTTOMPADDING', (0, 1), (-1, -1), 6),
        ('TOPPADDING', (0, 1), (-1, -1), 6),
        
        ('GRID', (0, 0), (-1, -1), 0.5, colors.HexColor('#cbd5e1')),
        ('ROWBACKGROUNDS', (0, 1), (-1, -1), [colors.white, colors.HexColor('#f8fafc')])
    ])

    story = []

    # 1. Logo & Header
    if os.path.exists(logo_path):
        img = RLImage(logo_path, width=2.2*inch, height=0.88*inch, kind='proportional')
        story.append(img)
        story.append(Spacer(1, 0.1*inch))
    
    story.append(Paragraph("Trendsetter Textiles, Inc.", styles['CompanyHeader']))
    story.append(Paragraph("Elite Globus Compound Warehouse 24, Brgy. Maguyam, Silang, Cavite", styles['ContactInfo']))
    story.append(Paragraph("Phone: +639178884059 | Email: osamaaslam.trendsetter@gmail.com | Website: www.trendsettertextiles.com", styles['ContactInfo']))
    story.append(Spacer(1, 0.2*inch))

    # 2. General Notes
    story.append(Paragraph("GENERAL NOTES", styles['SectionTitle']))
    story.append(Paragraph("• All item sizes and dimensions are specified in inches.", styles['GeneralNotes']))
    story.append(Paragraph("• Prices are subject to adjustment in the event of customized sizes or designs.", styles['GeneralNotes']))
    story.append(Paragraph("• Labels and laundry tags are included.", styles['GeneralNotes']))

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

    doc.build(story)
    print(f"Structured Grid Catalog successfully generated at {output_path}")

if __name__ == "__main__":
    base_dir = os.path.dirname(os.path.abspath(__file__))
    output_pdf = os.path.join(base_dir, 'public', 'Trendsetter_Textiles_Catalog.pdf')
    logo_file = os.path.join(base_dir, 'public', 'Trendsetter-website-photos', 'Trendsetter-Logo-V3.png')
    
    generate_pdf(output_pdf, logo_file)
