import React, { useState } from 'react';
import { Package, FileText, RotateCw, LogOut, ChevronRight, CheckCircle2, Clock } from 'lucide-react';

export default function PortalPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (!isLoggedIn) {
    return (
      <div className="min-h-[calc(100vh-200px)] flex items-center justify-center bg-warm-linen/50 py-20 px-4">
        <div className="max-w-md w-full bg-white p-10 rounded-2xl shadow-2xl border border-walnut/10">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-walnut mb-2">Client Portal</h2>
            <p className="text-sm opacity-80 text-walnut">Secure login for institutional partners</p>
          </div>
          
          <form onSubmit={(e) => { e.preventDefault(); setIsLoggedIn(true); }} className="space-y-6">
            <div>
              <label className="block text-sm font-bold uppercase tracking-wider mb-2 text-walnut opacity-80">Corporate Email</label>
              <input type="email" required className="w-full px-4 py-3 bg-warm-linen border border-walnut/20 rounded-md focus:outline-none focus:ring-2 focus:ring-muted-sage" placeholder="procurement@hiltonmanila.com" />
            </div>
            <div>
              <label className="block text-sm font-bold uppercase tracking-wider mb-2 text-walnut opacity-80">Password</label>
              <input type="password" required className="w-full px-4 py-3 bg-warm-linen border border-walnut/20 rounded-md focus:outline-none focus:ring-2 focus:ring-muted-sage" placeholder="••••••••" />
            </div>
            <div className="flex justify-between items-center text-sm">
              <label className="flex items-center text-walnut">
                <input type="checkbox" className="mr-2 rounded text-muted-sage focus:ring-muted-sage" /> Remember me
              </label>
              <a href="#" className="text-muted-sage font-bold hover:text-walnut">Forgot Password?</a>
            </div>
            <button type="submit" className="w-full bg-walnut text-warm-linen font-bold py-4 rounded-md text-lg hover:bg-muted-sage hover:text-walnut transition-colors duration-300 shadow-md">
              Secure Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-warm-linen py-12 text-walnut">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Dashboard Header */}
        <div className="flex flex-col md:flex-row justify-between items-center bg-white p-8 rounded-2xl shadow-sm border border-walnut/10 mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Welcome back, Hilton Manila</h1>
            <p className="opacity-80">Account ID: HTL-MNL-8821 | Account Manager: Sarah Jenkins</p>
          </div>
          <div className="mt-6 md:mt-0">
            <button onClick={() => setIsLoggedIn(false)} className="flex items-center gap-2 text-sm font-bold text-walnut/60 hover:text-walnut transition-colors">
              <LogOut size={16} /> Sign Out
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Dashboard Area */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Active Orders Tracker */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-walnut/10">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold flex items-center gap-2"><Package className="text-muted-sage" /> Active Orders</h2>
                <a href="#" className="text-sm font-bold text-muted-sage hover:underline">View All History</a>
              </div>
              
              <div className="border border-walnut/10 rounded-xl overflow-hidden">
                <div className="bg-warm-linen/50 p-4 border-b border-walnut/10 flex justify-between items-center">
                  <div>
                    <p className="font-bold">PO #HTL-2026-089</p>
                    <p className="text-xs opacity-70">Placed: Oct 12, 2026</p>
                  </div>
                  <span className="bg-muted-sage/20 text-walnut px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                    <Clock size={12} /> In Transit
                  </span>
                </div>
                <div className="p-6">
                  <p className="font-semibold mb-4">500x T300 Sateen King Sheets (Custom Embroidered)</p>
                  
                  {/* Progress Bar */}
                  <div className="relative pt-1">
                    <div className="flex mb-2 items-center justify-between">
                      <div className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-muted-sage bg-warm-linen">
                        Dispatched
                      </div>
                      <div className="text-right">
                        <span className="text-xs font-semibold inline-block text-walnut">
                          ETA: Tomorrow, 10:00 AM
                        </span>
                      </div>
                    </div>
                    <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-warm-linen">
                      <div style={{ width: "80%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-muted-sage"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 1-Click Reordering */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-walnut/10">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold flex items-center gap-2"><RotateCw className="text-muted-sage" /> Quick Reorder Hub</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border border-walnut/10 rounded-xl p-5 flex flex-col justify-between hover:border-muted-sage transition-colors">
                  <div>
                    <h4 className="font-bold text-lg mb-1">Standard Pool Towels</h4>
                    <p className="text-sm opacity-70 mb-4">SKU: PT-650GSM-WHT</p>
                    <p className="text-xl font-bold text-muted-sage mb-6">$7.20 / pc</p>
                  </div>
                  <button className="w-full bg-walnut text-warm-linen py-3 rounded font-bold hover:bg-muted-sage hover:text-walnut transition-colors shadow-sm">
                    Reorder 500 pcs
                  </button>
                </div>
                
                <div className="border border-walnut/10 rounded-xl p-5 flex flex-col justify-between hover:border-muted-sage transition-colors">
                  <div>
                    <h4 className="font-bold text-lg mb-1">Premium Waffle Robes</h4>
                    <p className="text-sm opacity-70 mb-4">SKU: RB-400GSM-EMB (w/ Logo)</p>
                    <p className="text-xl font-bold text-muted-sage mb-6">$32.00 / pc</p>
                  </div>
                  <button className="w-full bg-walnut text-warm-linen py-3 rounded font-bold hover:bg-muted-sage hover:text-walnut transition-colors shadow-sm">
                    Reorder 100 pcs
                  </button>
                </div>
              </div>
            </div>

          </div>

          {/* Sidebar Area */}
          <div className="space-y-8">
            
            {/* Negotiated Pricing Contracts */}
            <div className="bg-walnut text-warm-linen p-8 rounded-2xl shadow-xl">
              <h2 className="text-xl font-bold mb-6 flex items-center gap-2"><FileText className="text-muted-sage" /> Contract Details</h2>
              <div className="space-y-4">
                <div className="bg-white/5 p-4 rounded-lg">
                  <p className="text-xs uppercase tracking-wider opacity-60 mb-1">Contract Status</p>
                  <p className="font-bold text-muted-sage flex items-center gap-2"><CheckCircle2 size={16} /> Active (Tier 1 Volume)</p>
                </div>
                <div className="bg-white/5 p-4 rounded-lg">
                  <p className="text-xs uppercase tracking-wider opacity-60 mb-1">Current SLA</p>
                  <p className="font-bold">Next-Day Delivery (Metro Manila)</p>
                </div>
                <div className="bg-white/5 p-4 rounded-lg">
                  <p className="text-xs uppercase tracking-wider opacity-60 mb-1">Dedicated Account Rep</p>
                  <p className="font-bold">Sarah Jenkins</p>
                  <a href="mailto:s.jenkins@trendsettertextiles.com" className="text-sm text-muted-sage hover:underline">s.jenkins@trendsettertextiles.com</a>
                </div>
              </div>
              <button className="w-full mt-6 bg-white/10 hover:bg-white/20 text-warm-linen py-3 rounded font-bold transition-colors">
                Download Master Contract PDF
              </button>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
