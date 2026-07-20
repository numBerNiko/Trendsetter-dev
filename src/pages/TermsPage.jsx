import React from 'react';
import { useRegion } from '../hooks/useRegion';
import { FileText } from 'lucide-react';

export default function TermsPage() {
  const region = useRegion();

  return (
    <div className="bg-neutral-bg min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 overflow-hidden" style={{ backgroundColor: region.theme.primaryBg }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <FileText size={48} className="mx-auto mb-6 text-white opacity-90" />
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 uppercase tracking-tight">Terms & Conditions</h1>
          <p className="text-lg md:text-xl text-white opacity-90 max-w-2xl mx-auto">
            Standard commercial terms for institutional procurement and custom manufacturing.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate/10 prose prose-slate max-w-none">
            
            <p className="lead text-xl text-slate mb-12 font-medium">
              The following standard terms and conditions apply to all quotations, purchase orders, and sales agreements with Trendsetter Textiles, Inc.
            </p>

            <div className="space-y-12">
              <div>
                <h2 className="text-2xl font-bold mb-4 text-slate border-b pb-2">1. Quotation Validity</h2>
                <p>
                  All official quotations provided by Trendsetter Textiles are valid for a period of <strong>fifteen (15) calendar days</strong> from the date of issuance, unless otherwise explicitly stated in writing on the quotation document. Prices are subject to change without prior notice should there be any adjustments in the order quantity or specifications after this period.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-slate border-b pb-2">2. Payment Terms</h2>
                <p className="mb-4">Standard institutional orders require the following payment structure:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Down Payment:</strong> A fifty percent (50%) down payment is strictly required upon confirmation of the Purchase Order (PO) prior to the commencement of production.</li>
                  <li><strong>Balance Payment:</strong> The remaining fifty percent (50%) balance shall be payable immediately upon completion of the order and issuance of the final Sales Invoice.</li>
                </ul>
                <p className="mt-4 text-sm italic text-neutral-500">Late payments may be subject to applicable compounding charges as per regional laws.</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-slate border-b pb-2">3. Delivery Timelines</h2>
                <p>
                  Estimated delivery for standard bulk orders is <strong>sixty (60) to ninety (90) working days</strong> upon receipt of the confirmed Purchase Order and initial down payment. Delivery timelines are subject to force majeure and other circumstances beyond the reasonable control of the Seller. Delivery charges for locations outside standard metropolitan zones will be quoted separately.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-slate border-b pb-2">4. Purchase Order Requirements & Customization</h2>
                <p className="mb-4">
                  For bespoke manufacturing programs and custom facility dimensions:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Clear Specifications:</strong> All terms, product specifications, and required sizes must be clearly stated in the official Purchase Order. Any omission or discrepancy may result in delays or revisions to pricing.</li>
                  <li><strong>Price Adjustments:</strong> Prices are subject to adjustment in the event of requested customized sizes, fabrics, or unique designs.</li>
                  <li><strong>Labels and Tags:</strong> Standard labels and laundry tags are included free of charge; however, custom institutional logo designs may incur additional costs depending on complexity.</li>
                </ul>
              </div>
            </div>

            <div className="mt-16 p-6 rounded-lg bg-neutral-bg border border-slate/10 text-center">
              <p className="text-sm m-0 text-slate">
                For specific contractual inquiries or to request a master service agreement, please contact <br/><strong className="text-deep-teal">{region.email}</strong>
              </p>
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
}
