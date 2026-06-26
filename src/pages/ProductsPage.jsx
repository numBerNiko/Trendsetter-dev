import React from 'react';

export default function ProductsPage() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Our Core Product Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "Sheets", desc: "Soft-touch weave | Easy bulk ordering | Institutional durability" },
            { title: "Blankets", desc: "Thermal retention | Fade resistant | Snag-free construction" },
            { title: "Pillows", desc: "Hypoallergenic fill | Fluid-resistant options | Shape retention" },
            { title: "Towels", desc: "High absorbency | Quick-drying | Reinforced woven edges" },
            { title: "Uniforms", desc: "Breathable fabric | Ergonomic fits | Stain-release technology" },
            { title: "Specialty Textiles", desc: "Customized solutions | Protective barrier fabrics | Tailored dimensions" },
          ].map((product, idx) => (
            <div key={idx} className="border border-walnut/20 p-6 rounded-lg bg-warm-linen flex flex-col justify-center text-center hover:border-muted-sage transition-colors duration-300">
              <h3 className="text-xl font-bold mb-3">{product.title}</h3>
              <p className="text-sm opacity-80">{product.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
