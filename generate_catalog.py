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
        topMargin=2.4*inch,
        bottomMargin=0.5*inch
    )
    
    styles = getSampleStyleSheet()
    
    # Header styles
    styles.add(ParagraphStyle(
        name='CompanyHeader',
        parent=styles['Normal'],
        fontName='Times-Roman',
        fontSize=20,
        spaceAfter=12,
        alignment=1, # Centered in its column
        textColor=colors.HexColor('#0B2559')
    ))
    styles.add(ParagraphStyle(
        name='ContactInfo',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=10,
        spaceAfter=4,
        leading=14,
        alignment=1, # Centered in its column
        textColor=colors.HexColor('#333333')
    ))
    
    # Title Styles
    styles.add(ParagraphStyle(
        name='DocTitle',
        parent=styles['Heading1'],
        fontName='Times-Roman',
        fontSize=18,
        spaceBefore=20,
        spaceAfter=12,
        alignment=1,
        textColor=colors.HexColor('#0B2559')
    ))
    styles.add(ParagraphStyle(
        name='DocSubtitle',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=11,
        spaceAfter=24,
        alignment=1,
        textColor=colors.HexColor('#666666')
    ))
    
    # Section Title
    styles.add(ParagraphStyle(
        name='SectionTitle',
        parent=styles['Heading2'],
        fontName='Times-Roman',
        fontSize=14,
        spaceBefore=16,
        spaceAfter=8,
        textColor=colors.HexColor('#0B2559'),
        alignment=0 
    ))
    
    base_table_style = TableStyle([
        ('BACKGROUND', (0, 0), (-1, 0), colors.HexColor('#0B2559')),
        ('TEXTCOLOR', (0, 0), (-1, 0), colors.white),
        ('ALIGN', (0, 0), (-1, 0), 'CENTER'),
        ('FONTNAME', (0, 0), (-1, 0), 'Helvetica-Bold'),
        ('FONTSIZE', (0, 0), (-1, 0), 10),
        ('BOTTOMPADDING', (0, 0), (-1, 0), 6),
        ('TOPPADDING', (0, 0), (-1, 0), 6),
        
        ('ALIGN', (0, 1), (-1, -1), 'CENTER'), 
        
        ('FONTNAME', (0, 1), (-1, -1), 'Helvetica'),
        ('FONTSIZE', (0, 1), (-1, -1), 9),
        ('BOTTOMPADDING', (0, 1), (-1, -1), 4),
        ('TOPPADDING', (0, 1), (-1, -1), 4),
        
        ('GRID', (0, 0), (-1, -1), 0.5, colors.black),
        ('BOX', (0, 0), (-1, -1), 1, colors.black),
    ])

    story = []

    logo_img = RLImage(logo_path, width=2.5*inch, height=1.0*inch, kind='proportional') if os.path.exists(logo_path) else ""
    header_text = [
        Paragraph("TRENDSETTER TEXTILES, INC.", styles['CompanyHeader']),
        Paragraph("Elite Globus Compound Warehouse 24, Brgy. Maguyam, Silang, Cavite", styles['ContactInfo']),
        Paragraph("Cellphone Nos: 09524684603", styles['ContactInfo']),
        Paragraph("Email: customerservice@trendsettertextiles.com • Website:", styles['ContactInfo']),
        Paragraph("https://ph.trendsettertextiles.com", styles['ContactInfo'])
    ]
    
    header_data = [[logo_img, "", header_text]]
    
    header_table = Table(header_data, colWidths=[2.8*inch, 0.2*inch, 4.5*inch])
    header_table.setStyle(TableStyle([
        ('ALIGN', (0,0), (0,0), 'CENTER'),
        ('VALIGN', (0,0), (0,0), 'MIDDLE'),
        ('ALIGN', (2,0), (2,0), 'CENTER'),
        ('VALIGN', (2,0), (2,0), 'MIDDLE'),
        ('LINEBEFORE', (2,0), (2,0), 1.5, colors.HexColor('#C8A97E')), # Gold vertical line
        ('BOTTOMPADDING', (0,0), (-1,-1), 20),
    ]))
    
    def add_header(canvas, doc):
        canvas.saveState()
        header_w, header_h = header_table.wrap(doc.width, doc.topMargin)
        header_table.drawOn(canvas, doc.leftMargin, doc.pagesize[1] - 0.5*inch - header_h)
        # Gold horizontal line
        canvas.setStrokeColor(colors.HexColor('#C8A97E'))
        canvas.setLineWidth(1.5)
        y_line = doc.pagesize[1] - 0.5*inch - header_h
        canvas.line(doc.leftMargin, y_line, doc.leftMargin + doc.width, y_line)
        canvas.restoreState()

    story.append(Paragraph("HOTEL & HOSPITALITY CATALOG", styles['DocTitle']))
    story.append(Paragraph("Luxury Linen • Towels • Bedding • Hospitality Supplies", styles['DocSubtitle']))
    
    story.append(Paragraph("Linen Collection", styles['SectionTitle']))
    bed_data = [
        ['Item', 'Size', 'Available Thread Counts'],
        ['Flat Sheet - Single', '65x95', '200TC, 300TC, 400TC, 500TC, 600TC'],
        ['Flat Sheet - Semi Double', '74x95', '200TC, 300TC, 400TC, 500TC, 600TC'],
        ['Flat Sheet - Double', '84x95', '200TC, 300TC, 400TC, 500TC, 600TC'],
        ['Flat Sheet - Queen', '92x95', '200TC, 300TC, 400TC, 500TC, 600TC'],
        ['Flat Sheet - King', '110x108', '200TC, 300TC, 400TC, 500TC, 600TC'],
        ['Fitted Sheet - Single', '39x78x8', '200TC, 300TC, 400TC, 500TC, 600TC'],
        ['Fitted Sheet - Semi Double', '42x78x8', '200TC, 300TC, 400TC, 500TC, 600TC'],
        ['Fitted Sheet - Double', '54x78x8', '200TC, 300TC, 400TC, 500TC, 600TC'],
        ['Fitted Sheet - Queen', '60x78x10', '200TC, 300TC, 400TC, 500TC, 600TC'],
        ['Fitted Sheet - King', '80x78x10', '200TC, 300TC, 400TC, 500TC, 600TC'],
        ['Duvet Cover - Single', '65x94', '200TC, 300TC, 400TC, 500TC, 600TC'],
        ['Duvet Cover - Semi Double', '72x93', '200TC, 300TC, 400TC, 500TC, 600TC'],
        ['Duvet Cover - Double', '84x93', '200TC, 300TC, 400TC, 500TC, 600TC'],
        ['Duvet Cover - Queen', '90x96', '200TC, 300TC, 400TC, 500TC, 600TC'],
        ['Duvet Cover - King', '108x94', '200TC, 300TC, 400TC, 500TC, 600TC'],
        ['Pillowcase w/ Flap', '20x30x6', '200TC, 300TC, 400TC, 500TC, 600TC'],
        ['Pillowcase w/ Flap', '20x36x6', '200TC, 300TC, 400TC, 500TC, 600TC'],
    ]
    t1 = Table(bed_data, colWidths=[3.0*inch, 1.5*inch, 3.0*inch])
    t1.setStyle(base_table_style)
    story.append(t1)

    story.append(Spacer(1, 20))
    story.append(Paragraph("Towel Collection", styles['SectionTitle']))
    
    bath_data = [
        ['Item', 'Size'],
        ['Bath Towel - 500 grams', '25x50'],
        ['Bath Towel - 550 grams', '27x54'],
        ['Bath Towel - 650 grams', '30x60'],
        ['Bath Towel - 700 grams', '30x60'],
        ['Bath Mat w/ GB - 300 grams', '20x30'],
        ['Hand Towel - 180 grams', '20x30'],
        ['Face Towel - 80 grams', '13x13'],
        ['Pool Towel - 650 grams', '30x60'],
        ['Bathrobe Terry', 'Free Size'],
    ]
    t2 = Table(bath_data, colWidths=[4.0*inch, 3.5*inch])
    t2.setStyle(base_table_style)
    story.append(t2)

    story.append(Spacer(1, 20))
    story.append(Paragraph("Bedding & Hospitality Items", styles['SectionTitle']))
    
    acc_data = [
        ['Item', 'Size'],
        ['Duvet Infill-200RFS - Single', '63x90'],
        ['Duvet Infill-200RFS - Semi Double', '70x91'],
        ['Duvet Infill-200RFS - Double', '82x91'],
        ['Duvet Infill-200RFS - Queen', '88x94'],
        ['Duvet Infill-200RFS - King', '106x92'],
        ['Bed Protector - Single', '39x78'],
        ['Bed Protector - Queen', '60x78'],
        ['Bed Protector - King', '72x78'],
        ['Fleece Blanket - 350 GSM', '60x90'],
        ['Fleece Blanket - 350 GSM', '72x90'],
        ['Fleece Blanket - 350 GSM', '84x90'],
        ['Pillow Fiber Fill - 1,200 grams', '20x30'],
        ['Pillow Fiber Fill - 1,400 grams', '20x36'],
        ['Pillow Downfiber - 1,200 grams', '20x30'],
        ['Pillow Downfiber - 1,500 grams', '20x36'],
    ]
    t3 = Table(acc_data, colWidths=[4.0*inch, 3.5*inch])
    t3.setStyle(base_table_style)
    story.append(t3)

    doc.build(story, onFirstPage=add_header, onLaterPages=add_header)
    print(f"Structured 1:1 Catalog successfully generated at {output_path}")

if __name__ == "__main__":
    base_dir = os.path.dirname(os.path.abspath(__file__))
    output_pdf = os.path.join(base_dir, 'public', 'Trendsetter_Textiles_Catalog.pdf')
    logo_file = os.path.join(base_dir, 'public', 'logo.png') # Retaining the high-res PNG for PDF rendering
    
    generate_pdf(output_pdf, logo_file)
