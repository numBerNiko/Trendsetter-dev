import React from 'react';
import { Tag, Scissors, Package, Boxes, Truck } from 'lucide-react';

export default function CustomProgramsPage() {
  return (
    <section className="py-20 bg-walnut text-warm-linen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Custom Programs</h2>
          <p className="opacity-80 max-w-2xl mx-auto">Scalable solutions tailored to your unique operational requirements and brand identity.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 text-center">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-warm-linen/10 flex items-center justify-center mb-4 text-muted-sage">
              <Tag size={32} />
            </div>
            <h4 className="font-semibold mb-2">Private Labeling</h4>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-warm-linen/10 flex items-center justify-center mb-4 text-muted-sage">
              <Scissors size={32} />
            </div>
            <h4 className="font-semibold mb-2">Embroidery</h4>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-warm-linen/10 flex items-center justify-center mb-4 text-muted-sage">
              <Package size={32} />
            </div>
            <h4 className="font-semibold mb-2">Packaging Customization</h4>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-warm-linen/10 flex items-center justify-center mb-4 text-muted-sage">
              <Boxes size={32} />
            </div>
            <h4 className="font-semibold mb-2">Bulk Orders</h4>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-warm-linen/10 flex items-center justify-center mb-4 text-muted-sage">
              <Truck size={32} />
            </div>
            <h4 className="font-semibold mb-2">Flexible Sourcing</h4>
          </div>
        </div>
      </div>
    </section>
  );
}
