import React from 'react';

export default function AboutPage() {
  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-8 text-center">About Us</h2>
        <div className="prose prose-lg mx-auto text-walnut">
          <p className="text-xl opacity-90 mb-6 leading-relaxed">
            As a premier institutional wholesale sourcing partner, Trendsetter Textiles Inc. bridges the gap between manufacturing excellence and facility-grade demands. We understand that in nursing homes, clinics, and hotels, textiles are critical operational assets.
          </p>
          <p className="text-xl opacity-90 leading-relaxed mb-12">
            Our commitment is to provide uncompromising quality, reliable supply chains, and adaptive solutions that keep your operations running smoothly, day in and day out.
          </p>
          
          <div className="bg-walnut/5 p-8 rounded-lg border border-walnut/10 mt-8">
            <h3 className="text-2xl font-semibold mb-6">Direct Contact Points</h3>
            <div className="space-y-4">
              <p className="flex items-center gap-4 text-lg">
                <span className="font-medium w-20">Phone:</span>
                <a href="tel:+639178884059" className="hover:text-muted-sage transition-colors font-semibold">+63-917-888-4059</a>
              </p>
              <p className="flex items-center gap-4 text-lg">
                <span className="font-medium w-20">Email:</span>
                <a href="mailto:customerservice@trendsettertextiles.com" className="hover:text-muted-sage transition-colors font-semibold">customerservice@trendsettertextiles.com</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
