import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Area, AreaChart } from 'recharts';

const IndianTravelViz2025 = () => {
  const [activeView, setActiveView] = useState('international');
  const [hoveredCard, setHoveredCard] = useState(null);

  // International destinations data from MakeMyTrip & travel reports 2025
  const internationalData = [
    { name: 'Thailand', visitors: 950, growth: 15, color: '#D4AF37' },
    { name: 'UAE', visitors: 880, growth: 3, color: '#C9A961' },
    { name: 'Sri Lanka', visitors: 420, growth: 25, color: '#B8956A' },
    { name: 'Vietnam', visitors: 380, growth: 45, color: '#9B8068' },
    { name: 'Malaysia', visitors: 350, growth: 12, color: '#8B7355' },
    { name: 'Singapore', visitors: 320, growth: 8, color: '#7A6A53' },
    { name: 'Indonesia', visitors: 290, growth: 18, color: '#D4A574' },
    { name: 'Maldives', visitors: 210, growth: -5, color: '#C5A880' },
    { name: 'Nepal', visitors: 180, growth: 20, color: '#B69968' },
    { name: 'Bhutan', visitors: 150, growth: 35, color: '#A88A5E' }
  ];

  // Domestic destinations by rail (IRCTC data)
  const domesticRailData = [
    { destination: 'Varanasi', passengers: 45, pilgrimage: true },
    { destination: 'Prayagraj', passengers: 42, pilgrimage: true },
    { destination: 'Ayodhya', passengers: 38, pilgrimage: true },
    { destination: 'Tirupati', passengers: 35, pilgrimage: true },
    { destination: 'Jaipur', passengers: 32, pilgrimage: false },
    { destination: 'Agra', passengers: 28, pilgrimage: false },
    { destination: 'Goa', passengers: 26, pilgrimage: false },
    { destination: 'Amritsar', passengers: 24, pilgrimage: true },
    { destination: 'Madurai', passengers: 22, pilgrimage: true },
    { destination: 'Kerala', passengers: 20, pilgrimage: false }
  ];

  // Domestic destinations by air
  const domesticAirData = [
    { destination: 'Goa', passengers: 85, type: 'Leisure' },
    { destination: 'Jaipur', passengers: 68, type: 'Heritage' },
    { destination: 'Udaipur', passengers: 52, type: 'Heritage' },
    { destination: 'Manali', passengers: 48, type: 'Hill Station' },
    { destination: 'Kerala', passengers: 45, type: 'Leisure' },
    { destination: 'Jaisalmer', passengers: 38, type: 'Heritage' },
    { destination: 'Darjeeling', passengers: 35, type: 'Hill Station' },
    { destination: 'Munnar', passengers: 32, type: 'Hill Station' },
    { destination: 'Andaman', passengers: 30, type: 'Beach' },
    { destination: 'Kashmir', passengers: 28, type: 'Hill Station' }
  ];

  // Domestic bus travel data
  const domesticBusData = [
    { destination: 'Delhi-Jaipur', passengers: 95, distance: 280 },
    { destination: 'Mumbai-Pune', passengers: 88, distance: 150 },
    { destination: 'Bangalore-Chennai', passengers: 82, distance: 346 },
    { destination: 'Hyderabad-Bangalore', passengers: 78, distance: 575 },
    { destination: 'Delhi-Manali', passengers: 72, distance: 540 },
    { destination: 'Chennai-Madurai', passengers: 68, distance: 462 },
    { destination: 'Bangalore-Goa', passengers: 65, distance: 560 },
    { destination: 'Delhi-Rishikesh', passengers: 58, distance: 240 },
    { destination: 'Mumbai-Goa', passengers: 55, distance: 585 },
    { destination: 'Kolkata-Darjeeling', passengers: 48, distance: 620 }
  ];

  // Mode comparison data
  const modeComparisonData = [
    { mode: 'Bus', passengers: 140, percentage: 46, growth: 25 },
    { mode: 'Rail', passengers: 112, passengers: 37, growth: 8 },
    { mode: 'Air', passengers: 52, percentage: 17, growth: 10 }
  ];

  const travelPurposeData = [
    { name: 'Leisure', value: 771, color: '#D4AF37' },
    { name: 'Pilgrimage', value: 229, color: '#B8956A' },
    { name: 'Business', value: 110, color: '#8B7355' },
    { name: 'Medical', value: 65, color: '#C9A961' }
  ];

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div style={{
          background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.98), rgba(30, 41, 59, 0.98))',
          padding: '16px 20px',
          borderRadius: '12px',
          border: '1px solid rgba(212, 175, 55, 0.3)',
          backdropFilter: 'blur(20px)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)'
        }}>
          <p style={{ 
            color: '#D4AF37', 
            fontWeight: 600, 
            margin: '0 0 10px 0',
            fontSize: '0.95rem',
            letterSpacing: '0.5px',
            textTransform: 'uppercase'
          }}>{label}</p>
          {payload.map((entry, index) => (
            <p key={index} style={{ 
              color: '#E2E8F0', 
              margin: '6px 0', 
              fontSize: '0.9rem',
              fontWeight: 400,
              display: 'flex',
              justifyContent: 'space-between',
              gap: '16px'
            }}>
              <span style={{ opacity: 0.8 }}>{entry.name}:</span>
              <span style={{ fontWeight: 600, color: '#D4AF37' }}>
                {entry.value}
                {entry.name === 'growth' && '%'}
                {entry.name === 'passengers' && 'M'}
              </span>
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(to bottom, #0F172A 0%, #1E293B 50%, #334155 100%)',
      color: '#F8FAFC',
      fontFamily: '"Playfair Display", "Cormorant Garamond", Georgia, serif',
      padding: '60px 24px',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Elegant geometric background patterns */}
      <div style={{
        position: 'absolute',
        top: '0',
        left: '0',
        right: '0',
        bottom: '0',
        opacity: 0.03,
        backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, #D4AF37 2px, #D4AF37 4px),
                          repeating-linear-gradient(90deg, transparent, transparent 2px, #D4AF37 2px, #D4AF37 4px)`,
        backgroundSize: '100px 100px',
        zIndex: 0
      }} />
      
      {/* Subtle radial gradient overlays */}
      <div style={{
        position: 'absolute',
        top: '-20%',
        right: '-10%',
        width: '800px',
        height: '800px',
        background: 'radial-gradient(circle, rgba(212, 175, 55, 0.08) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(80px)',
        zIndex: 0
      }} />
      <div style={{
        position: 'absolute',
        bottom: '-20%',
        left: '-10%',
        width: '700px',
        height: '700px',
        background: 'radial-gradient(circle, rgba(201, 169, 97, 0.06) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(80px)',
        zIndex: 0
      }} />

      {/* Decorative corner elements */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '200px',
        height: '200px',
        borderTop: '2px solid rgba(212, 175, 55, 0.2)',
        borderLeft: '2px solid rgba(212, 175, 55, 0.2)',
        zIndex: 0
      }} />
      <div style={{
        position: 'absolute',
        top: 0,
        right: 0,
        width: '200px',
        height: '200px',
        borderTop: '2px solid rgba(212, 175, 55, 0.2)',
        borderRight: '2px solid rgba(212, 175, 55, 0.2)',
        zIndex: 0
      }} />

      <div style={{ maxWidth: '1400px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <header style={{ textAlign: 'center', marginBottom: '80px', animation: 'fadeIn 1s ease-out' }}>
          <div style={{
            display: 'inline-block',
            padding: '8px 24px',
            background: 'linear-gradient(90deg, rgba(212, 175, 55, 0.1), rgba(201, 169, 97, 0.1))',
            border: '1px solid rgba(212, 175, 55, 0.3)',
            borderRadius: '50px',
            marginBottom: '24px',
            fontSize: '0.85rem',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            color: '#D4AF37',
            fontFamily: '"Montserrat", sans-serif',
            fontWeight: 500
          }}>
            Annual Travel Report 2025
          </div>
          
          <h1 style={{
            fontSize: 'clamp(2.5rem, 6vw, 5rem)',
            fontWeight: 400,
            margin: '0 0 24px 0',
            color: '#F8FAFC',
            letterSpacing: '-0.02em',
            lineHeight: 1.1,
            fontFamily: '"Playfair Display", Georgia, serif'
          }}>
            Indian Travelers<br/>
            <span style={{
              background: 'linear-gradient(135deg, #D4AF37 0%, #F4E4C1 50%, #D4AF37 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontStyle: 'italic'
            }}>
              Destinations Unveiled
            </span>
          </h1>
          
          <p style={{
            fontSize: '1.15rem',
            color: '#CBD5E1',
            fontWeight: 300,
            margin: '0 auto',
            maxWidth: '600px',
            lineHeight: 1.6,
            fontFamily: '"Montserrat", sans-serif'
          }}>
            A comprehensive analysis of vacation preferences across domestic and international travel corridors
          </p>
          
          <div style={{
            display: 'flex',
            gap: '16px',
            justifyContent: 'center',
            marginTop: '48px',
            flexWrap: 'wrap'
          }}>
            {['international', 'domestic', 'comparison'].map(view => (
              <button
                key={view}
                onClick={() => setActiveView(view)}
                style={{
                  padding: '14px 36px',
                  fontSize: '0.95rem',
                  fontWeight: 500,
                  border: 'none',
                  background: activeView === view 
                    ? 'linear-gradient(135deg, #D4AF37, #C9A961)'
                    : 'transparent',
                  color: activeView === view ? '#0F172A' : '#CBD5E1',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  textTransform: 'capitalize',
                  fontFamily: '"Montserrat", sans-serif',
                  letterSpacing: '0.5px',
                  position: 'relative',
                  overflow: 'hidden',
                  boxShadow: activeView === view ? '0 4px 20px rgba(212, 175, 55, 0.4)' : 'none'
                }}
                onMouseEnter={e => {
                  if (activeView !== view) {
                    e.target.style.color = '#D4AF37';
                    e.target.style.background = 'rgba(212, 175, 55, 0.1)';
                  }
                }}
                onMouseLeave={e => {
                  if (activeView !== view) {
                    e.target.style.color = '#CBD5E1';
                    e.target.style.background = 'transparent';
                  }
                }}
              >
                {activeView === view && (
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                    animation: 'shimmer 2s infinite'
                  }} />
                )}
                <span style={{ position: 'relative', zIndex: 1 }}>{view}</span>
              </button>
            ))}
          </div>
        </header>

        {/* International View */}
        {activeView === 'international' && (
          <div style={{ animation: 'slideIn 0.6s ease-out' }}>
            <div style={{
              background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.4), rgba(51, 65, 85, 0.3))',
              backdropFilter: 'blur(30px)',
              borderRadius: '20px',
              padding: '56px 48px',
              marginBottom: '48px',
              border: '1px solid rgba(212, 175, 55, 0.2)',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.4)',
              position: 'relative',
              overflow: 'hidden'
            }}>
              {/* Decorative corner accent */}
              <div style={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: '150px',
                height: '150px',
                background: 'linear-gradient(225deg, rgba(212, 175, 55, 0.1), transparent)',
                pointerEvents: 'none'
              }} />
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '32px' }}>
                <div style={{
                  width: '4px',
                  height: '48px',
                  background: 'linear-gradient(to bottom, #D4AF37, #C9A961)',
                  borderRadius: '2px'
                }} />
                <div>
                  <h2 style={{
                    fontSize: '2.25rem',
                    margin: 0,
                    color: '#F8FAFC',
                    fontWeight: 400,
                    letterSpacing: '-0.01em',
                    fontFamily: '"Playfair Display", Georgia, serif'
                  }}>
                    International Destinations
                  </h2>
                  <p style={{ 
                    color: '#94A3B8', 
                    margin: '8px 0 0 0', 
                    fontSize: '1rem',
                    fontFamily: '"Montserrat", sans-serif',
                    fontWeight: 300
                  }}>
                    Based on MakeMyTrip, Airport & Travel Portal Data
                  </p>
                </div>
              </div>
              
              <ResponsiveContainer width="100%" height={500}>
                <BarChart data={internationalData} margin={{ top: 20, right: 30, left: 20, bottom: 80 }}>
                  <XAxis 
                    dataKey="name" 
                    angle={-45}
                    textAnchor="end"
                    height={100}
                    tick={{ fill: '#CBD5E1', fontSize: 13, fontWeight: 400, fontFamily: '"Montserrat", sans-serif' }}
                    stroke="rgba(212, 175, 55, 0.3)"
                  />
                  <YAxis 
                    tick={{ fill: '#CBD5E1', fontSize: 13, fontFamily: '"Montserrat", sans-serif' }} 
                    label={{ 
                      value: 'Visitors (in thousands)', 
                      angle: -90, 
                      position: 'insideLeft', 
                      fill: '#D4AF37',
                      fontFamily: '"Montserrat", sans-serif',
                      fontSize: 12
                    }}
                    stroke="rgba(212, 175, 55, 0.3)"
                  />
                  <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(212, 175, 55, 0.05)' }} />
                  <Legend 
                    wrapperStyle={{ 
                      paddingTop: '20px',
                      fontFamily: '"Montserrat", sans-serif',
                      fontSize: '13px'
                    }} 
                  />
                  <Bar dataKey="visitors" name="Visitors (k)" radius={[8, 8, 0, 0]}>
                    {internationalData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Bar>
                  <Bar dataKey="growth" name="YoY Growth (%)" fill="#8B7355" radius={[8, 8, 0, 0]} opacity={0.7} />
                </BarChart>
              </ResponsiveContainer>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                gap: '24px',
                marginTop: '56px'
              }}>
                {internationalData.slice(0, 3).map((dest, idx) => (
                  <div 
                    key={idx} 
                    style={{
                      background: `linear-gradient(135deg, ${dest.color}10, rgba(30, 41, 59, 0.5))`,
                      padding: '32px 28px',
                      borderRadius: '16px',
                      border: `1px solid ${dest.color}30`,
                      textAlign: 'center',
                      position: 'relative',
                      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      cursor: 'pointer'
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.transform = 'translateY(-8px)';
                      e.currentTarget.style.boxShadow = `0 16px 40px ${dest.color}40`;
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    <div style={{ fontSize: '2.5rem', marginBottom: '16px', filter: 'grayscale(0.2)' }}>
                      {idx === 0 ? '🥇' : idx === 1 ? '🥈' : '🥉'}
                    </div>
                    <h3 style={{ 
                      color: dest.color, 
                      margin: '0 0 12px 0', 
                      fontSize: '1.5rem',
                      fontFamily: '"Playfair Display", Georgia, serif',
                      fontWeight: 500
                    }}>
                      {dest.name}
                    </h3>
                    <p style={{ 
                      margin: '8px 0', 
                      fontSize: '2rem', 
                      fontWeight: 300,
                      color: '#F8FAFC',
                      fontFamily: '"Montserrat", sans-serif'
                    }}>
                      {dest.visitors}<span style={{ fontSize: '1.2rem', opacity: 0.6 }}>k</span>
                    </p>
                    <div style={{
                      marginTop: '16px',
                      padding: '8px 16px',
                      background: dest.growth > 0 ? 'rgba(134, 239, 172, 0.1)' : 'rgba(252, 165, 165, 0.1)',
                      borderRadius: '8px',
                      display: 'inline-block'
                    }}>
                      <p style={{ 
                        margin: 0, 
                        color: dest.growth > 0 ? '#86EFAC' : '#FCA5A5',
                        fontSize: '0.9rem',
                        fontWeight: 500,
                        fontFamily: '"Montserrat", sans-serif',
                        letterSpacing: '0.5px'
                      }}>
                        {dest.growth > 0 ? '↑' : '↓'} {Math.abs(dest.growth)}% YoY
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Travel Purpose Distribution */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.4), rgba(51, 65, 85, 0.3))',
              backdropFilter: 'blur(30px)',
              borderRadius: '20px',
              padding: '56px 48px',
              border: '1px solid rgba(212, 175, 55, 0.2)',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.4)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '32px' }}>
                <div style={{
                  width: '4px',
                  height: '48px',
                  background: 'linear-gradient(to bottom, #D4AF37, #C9A961)',
                  borderRadius: '2px'
                }} />
                <h2 style={{
                  fontSize: '2.25rem',
                  margin: 0,
                  color: '#F8FAFC',
                  fontWeight: 400,
                  letterSpacing: '-0.01em',
                  fontFamily: '"Playfair Display", Georgia, serif'
                }}>
                  Travel Purpose Distribution
                </h2>
              </div>
              
              <ResponsiveContainer width="100%" height={420}>
                <PieChart>
                  <Pie
                    data={travelPurposeData}
                    cx="50%"
                    cy="50%"
                    labelLine={{stroke: '#D4AF37', strokeWidth: 1}}
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    outerRadius={150}
                    fill="#8884d8"
                    dataKey="value"
                    stroke="rgba(212, 175, 55, 0.3)"
                    strokeWidth={2}
                  >
                    {travelPurposeData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip content={<CustomTooltip />} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}

        {/* Domestic View */}
        {activeView === 'domestic' && (
          <div style={{ animation: 'slideIn 0.6s ease-out' }}>
            {/* Rail Travel */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.4), rgba(51, 65, 85, 0.3))',
              backdropFilter: 'blur(30px)',
              borderRadius: '20px',
              padding: '56px 48px',
              marginBottom: '48px',
              border: '1px solid rgba(212, 175, 55, 0.2)',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.4)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                <div style={{
                  width: '4px',
                  height: '48px',
                  background: 'linear-gradient(to bottom, #D4AF37, #C9A961)',
                  borderRadius: '2px'
                }} />
                <div>
                  <h2 style={{
                    fontSize: '2.25rem',
                    margin: 0,
                    color: '#F8FAFC',
                    fontWeight: 400,
                    letterSpacing: '-0.01em',
                    fontFamily: '"Playfair Display", Georgia, serif'
                  }}>
                    Rail Journey Destinations
                  </h2>
                  <p style={{ 
                    color: '#94A3B8', 
                    margin: '8px 0 0 0', 
                    fontSize: '1rem',
                    fontFamily: '"Montserrat", sans-serif',
                    fontWeight: 300
                  }}>
                    6.9 billion passengers traveled via rail in FY24 · IRCTC Data
                  </p>
                </div>
              </div>
              
              <ResponsiveContainer width="100%" height={450}>
                <BarChart data={domesticRailData} layout="vertical" margin={{ left: 120, right: 20 }}>
                  <XAxis 
                    type="number" 
                    tick={{ fill: '#CBD5E1', fontSize: 13, fontFamily: '"Montserrat", sans-serif' }}
                    stroke="rgba(212, 175, 55, 0.3)"
                  />
                  <YAxis 
                    type="category" 
                    dataKey="destination" 
                    tick={{ fill: '#CBD5E1', fontSize: 13, fontWeight: 400, fontFamily: '"Montserrat", sans-serif' }}
                    stroke="rgba(212, 175, 55, 0.3)"
                  />
                  <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(212, 175, 55, 0.05)' }} />
                  <Bar dataKey="passengers" name="Passengers (M)" radius={[0, 8, 8, 0]}>
                    {domesticRailData.map((entry, index) => (
                      <Cell 
                        key={`cell-${index}`} 
                        fill={entry.pilgrimage ? '#D4AF37' : '#8B7355'} 
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>

              <div style={{
                display: 'flex',
                gap: '32px',
                justifyContent: 'center',
                marginTop: '32px',
                flexWrap: 'wrap'
              }}>
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '12px',
                  padding: '12px 24px',
                  background: 'rgba(212, 175, 55, 0.1)',
                  borderRadius: '8px',
                  border: '1px solid rgba(212, 175, 55, 0.2)'
                }}>
                  <div style={{ width: '24px', height: '24px', background: '#D4AF37', borderRadius: '6px' }} />
                  <span style={{ fontFamily: '"Montserrat", sans-serif', fontSize: '0.9rem' }}>
                    Pilgrimage <span style={{ color: '#86EFAC', fontWeight: 500 }}>(88% growth)</span>
                  </span>
                </div>
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '12px',
                  padding: '12px 24px',
                  background: 'rgba(139, 115, 85, 0.1)',
                  borderRadius: '8px',
                  border: '1px solid rgba(139, 115, 85, 0.2)'
                }}>
                  <div style={{ width: '24px', height: '24px', background: '#8B7355', borderRadius: '6px' }} />
                  <span style={{ fontFamily: '"Montserrat", sans-serif', fontSize: '0.9rem' }}>Leisure & Heritage</span>
                </div>
              </div>
            </div>

            {/* Air Travel */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.4), rgba(51, 65, 85, 0.3))',
              backdropFilter: 'blur(30px)',
              borderRadius: '20px',
              padding: '56px 48px',
              marginBottom: '48px',
              border: '1px solid rgba(212, 175, 55, 0.2)',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.4)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '40px' }}>
                <div style={{
                  width: '4px',
                  height: '48px',
                  background: 'linear-gradient(to bottom, #D4AF37, #C9A961)',
                  borderRadius: '2px'
                }} />
                <div>
                  <h2 style={{
                    fontSize: '2.25rem',
                    margin: 0,
                    color: '#F8FAFC',
                    fontWeight: 400,
                    letterSpacing: '-0.01em',
                    fontFamily: '"Playfair Display", Georgia, serif'
                  }}>
                    Domestic Aviation Routes
                  </h2>
                  <p style={{ 
                    color: '#94A3B8', 
                    margin: '8px 0 0 0', 
                    fontSize: '1rem',
                    fontFamily: '"Montserrat", sans-serif',
                    fontWeight: 300
                  }}>
                    306 million domestic passengers traveled by air in FY24
                  </p>
                </div>
              </div>
              
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                gap: '24px'
              }}>
                {domesticAirData.map((dest, idx) => (
                  <div 
                    key={idx} 
                    style={{
                      background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.08), rgba(30, 41, 59, 0.4))',
                      padding: '32px 28px',
                      borderRadius: '16px',
                      border: '1px solid rgba(212, 175, 55, 0.2)',
                      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      cursor: 'pointer',
                      position: 'relative',
                      overflow: 'hidden'
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.transform = 'translateY(-8px)';
                      e.currentTarget.style.boxShadow = '0 20px 40px rgba(212, 175, 55, 0.25)';
                      e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.5)';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = 'none';
                      e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.2)';
                    }}
                  >
                    <div style={{
                      position: 'absolute',
                      top: '-50%',
                      right: '-50%',
                      width: '200px',
                      height: '200px',
                      background: 'radial-gradient(circle, rgba(212, 175, 55, 0.1), transparent)',
                      pointerEvents: 'none'
                    }} />
                    
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      marginBottom: '20px',
                      position: 'relative'
                    }}>
                      <h3 style={{ 
                        margin: 0, 
                        fontSize: '1.5rem', 
                        color: '#F8FAFC',
                        fontFamily: '"Playfair Display", Georgia, serif',
                        fontWeight: 500
                      }}>
                        {dest.destination}
                      </h3>
                      <span style={{
                        background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.2), rgba(201, 169, 97, 0.2))',
                        padding: '6px 14px',
                        borderRadius: '20px',
                        fontSize: '0.75rem',
                        color: '#D4AF37',
                        fontWeight: 500,
                        letterSpacing: '0.5px',
                        textTransform: 'uppercase',
                        fontFamily: '"Montserrat", sans-serif',
                        border: '1px solid rgba(212, 175, 55, 0.3)'
                      }}>
                        {dest.type}
                      </span>
                    </div>
                    <p style={{
                      fontSize: '2.5rem',
                      fontWeight: 300,
                      margin: '16px 0 0 0',
                      color: '#D4AF37',
                      fontFamily: '"Montserrat", sans-serif',
                      position: 'relative'
                    }}>
                      {dest.passengers}<span style={{ fontSize: '1.2rem', opacity: 0.6 }}>M</span>
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Bus Travel */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.4), rgba(51, 65, 85, 0.3))',
              backdropFilter: 'blur(30px)',
              borderRadius: '20px',
              padding: '56px 48px',
              border: '1px solid rgba(212, 175, 55, 0.2)',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.4)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                <div style={{
                  width: '4px',
                  height: '48px',
                  background: 'linear-gradient(to bottom, #D4AF37, #C9A961)',
                  borderRadius: '2px'
                }} />
                <div>
                  <h2 style={{
                    fontSize: '2.25rem',
                    margin: 0,
                    color: '#F8FAFC',
                    fontWeight: 400,
                    letterSpacing: '-0.01em',
                    fontFamily: '"Playfair Display", Georgia, serif'
                  }}>
                    Premium Bus Corridors
                  </h2>
                  <p style={{ 
                    color: '#94A3B8', 
                    margin: '8px 0 0 0', 
                    fontSize: '1rem',
                    fontFamily: '"Montserrat", sans-serif',
                    fontWeight: 300
                  }}>
                    140M passengers · 25% growth in H1 FY26 · 79% occupancy rate
                  </p>
                </div>
              </div>
              
              <ResponsiveContainer width="100%" height={450}>
                <BarChart data={domesticBusData} margin={{ bottom: 90, top: 20 }}>
                  <XAxis 
                    dataKey="destination" 
                    angle={-45}
                    textAnchor="end"
                    height={100}
                    tick={{ fill: '#CBD5E1', fontSize: 12, fontWeight: 400, fontFamily: '"Montserrat", sans-serif' }}
                    stroke="rgba(212, 175, 55, 0.3)"
                  />
                  <YAxis 
                    tick={{ fill: '#CBD5E1', fontSize: 13, fontFamily: '"Montserrat", sans-serif' }} 
                    label={{ 
                      value: 'Passengers (M)', 
                      angle: -90, 
                      position: 'insideLeft', 
                      fill: '#D4AF37',
                      fontFamily: '"Montserrat", sans-serif',
                      fontSize: 12
                    }}
                    stroke="rgba(212, 175, 55, 0.3)"
                  />
                  <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(212, 175, 55, 0.05)' }} />
                  <Bar 
                    dataKey="passengers" 
                    name="Passengers (M)" 
                    fill="url(#busGradient)" 
                    radius={[8, 8, 0, 0]} 
                  />
                  <defs>
                    <linearGradient id="busGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#D4AF37" stopOpacity={0.9}/>
                      <stop offset="100%" stopColor="#8B7355" stopOpacity={0.7}/>
                    </linearGradient>
                  </defs>
                </BarChart>
              </ResponsiveContainer>

              <div style={{
                marginTop: '48px',
                padding: '32px',
                background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.08), rgba(30, 41, 59, 0.3))',
                borderRadius: '16px',
                border: '1px solid rgba(212, 175, 55, 0.2)'
              }}>
                <h3 style={{ 
                  color: '#D4AF37', 
                  margin: '0 0 20px 0',
                  fontFamily: '"Playfair Display", Georgia, serif',
                  fontSize: '1.5rem',
                  fontWeight: 500
                }}>
                  Travel Insights
                </h3>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                  gap: '20px'
                }}>
                  {[
                    { label: 'AC Buses', value: '73%', desc: 'of bookings' },
                    { label: 'Sleeper Seats', value: '50%', desc: 'preference' },
                    { label: 'Tier-3 Cities', value: '26%', desc: 'growth rate' },
                    { label: 'Peak Days', value: 'Sun-Fri', desc: 'highest occupancy' }
                  ].map((item, idx) => (
                    <div key={idx} style={{
                      padding: '20px',
                      background: 'rgba(15, 23, 42, 0.4)',
                      borderRadius: '12px',
                      border: '1px solid rgba(212, 175, 55, 0.15)'
                    }}>
                      <p style={{
                        fontSize: '0.85rem',
                        color: '#94A3B8',
                        margin: '0 0 8px 0',
                        textTransform: 'uppercase',
                        letterSpacing: '1px',
                        fontFamily: '"Montserrat", sans-serif'
                      }}>
                        {item.label}
                      </p>
                      <p style={{
                        fontSize: '1.8rem',
                        color: '#D4AF37',
                        margin: '0 0 4px 0',
                        fontWeight: 500,
                        fontFamily: '"Montserrat", sans-serif'
                      }}>
                        {item.value}
                      </p>
                      <p style={{
                        fontSize: '0.8rem',
                        color: '#CBD5E1',
                        margin: 0,
                        fontFamily: '"Montserrat", sans-serif'
                      }}>
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Comparison View */}
        {activeView === 'comparison' && (
          <div style={{ animation: 'slideIn 0.6s ease-out' }}>
            <div style={{
              background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.4), rgba(51, 65, 85, 0.3))',
              backdropFilter: 'blur(30px)',
              borderRadius: '20px',
              padding: '56px 48px',
              marginBottom: '48px',
              border: '1px solid rgba(212, 175, 55, 0.2)',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.4)'
            }}>
              <h2 style={{
                fontSize: '2.5rem',
                marginBottom: '48px',
                color: '#F8FAFC',
                fontWeight: 400,
                textAlign: 'center',
                letterSpacing: '-0.01em',
                fontFamily: '"Playfair Display", Georgia, serif'
              }}>
                Transport Mode Comparison
              </h2>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '32px',
                marginBottom: '64px'
              }}>
                {modeComparisonData.map((mode, idx) => (
                  <div 
                    key={idx} 
                    style={{
                      background: `linear-gradient(135deg, ${
                        mode.mode === 'Bus' ? 'rgba(212, 175, 55, 0.12)' :
                        mode.mode === 'Rail' ? 'rgba(184, 149, 106, 0.12)' :
                        'rgba(139, 115, 85, 0.12)'
                      }, rgba(30, 41, 59, 0.3))`,
                      padding: '48px 36px',
                      borderRadius: '20px',
                      border: `2px solid ${
                        mode.mode === 'Bus' ? 'rgba(212, 175, 55, 0.3)' :
                        mode.mode === 'Rail' ? 'rgba(184, 149, 106, 0.3)' :
                        'rgba(139, 115, 85, 0.3)'
                      }`,
                      textAlign: 'center',
                      position: 'relative',
                      overflow: 'hidden',
                      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      cursor: 'pointer'
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
                      e.currentTarget.style.boxShadow = `0 20px 50px ${
                        mode.mode === 'Bus' ? 'rgba(212, 175, 55, 0.3)' :
                        mode.mode === 'Rail' ? 'rgba(184, 149, 106, 0.3)' :
                        'rgba(139, 115, 85, 0.3)'
                      }`;
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.transform = 'translateY(0) scale(1)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    <div style={{
                      position: 'absolute',
                      top: 0,
                      right: 0,
                      width: '120px',
                      height: '120px',
                      background: `radial-gradient(circle, ${
                        mode.mode === 'Bus' ? 'rgba(212, 175, 55, 0.15)' :
                        mode.mode === 'Rail' ? 'rgba(184, 149, 106, 0.15)' :
                        'rgba(139, 115, 85, 0.15)'
                      }, transparent)`,
                      pointerEvents: 'none'
                    }} />
                    
                    <div style={{
                      fontSize: '4rem',
                      marginBottom: '24px',
                      filter: 'grayscale(0.3)'
                    }}>
                      {mode.mode === 'Bus' ? '🚌' : mode.mode === 'Rail' ? '🚂' : '✈️'}
                    </div>
                    
                    <h3 style={{
                      fontSize: '1.8rem',
                      margin: '0 0 16px 0',
                      color: mode.mode === 'Bus' ? '#D4AF37' :
                             mode.mode === 'Rail' ? '#B8956A' : '#8B7355',
                      fontFamily: '"Playfair Display", Georgia, serif',
                      fontWeight: 500
                    }}>
                      {mode.mode}
                    </h3>
                    
                    <p style={{
                      fontSize: '3.5rem',
                      fontWeight: 300,
                      margin: '24px 0',
                      color: '#F8FAFC',
                      fontFamily: '"Montserrat", sans-serif'
                    }}>
                      {mode.passengers}<span style={{ fontSize: '1.5rem', opacity: 0.6 }}>M</span>
                    </p>
                    
                    <p style={{
                      fontSize: '1.1rem',
                      margin: '12px 0 24px 0',
                      color: '#94A3B8',
                      fontFamily: '"Montserrat", sans-serif',
                      fontWeight: 300
                    }}>
                      {mode.percentage}% of total travel
                    </p>
                    
                    <div style={{
                      padding: '12px 24px',
                      background: 'linear-gradient(135deg, rgba(134, 239, 172, 0.15), rgba(134, 239, 172, 0.05))',
                      borderRadius: '12px',
                      display: 'inline-block',
                      border: '1px solid rgba(134, 239, 172, 0.2)'
                    }}>
                      <span style={{ 
                        color: '#86EFAC', 
                        fontWeight: 500, 
                        fontSize: '1.1rem',
                        fontFamily: '"Montserrat", sans-serif',
                        letterSpacing: '0.5px'
                      }}>
                        ↑ {mode.growth}% Growth
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Key Statistics */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                gap: '28px'
              }}>
                {[
                  { title: 'Domestic Tourism', value: '2.2B+', desc: 'visits in 2024', color: '#D4AF37' },
                  { title: 'Pilgrimage Growth', value: '88%', desc: 'Year-over-year', color: '#B8956A' },
                  { title: 'International Trips', value: '14.2M', desc: '18% growth in FY25', color: '#8B7355' },
                  { title: 'Tier-3 Growth', value: '26%', desc: 'Small town travelers', color: '#C9A961' }
                ].map((stat, idx) => (
                  <div 
                    key={idx} 
                    style={{
                      background: `linear-gradient(135deg, ${stat.color}10, rgba(30, 41, 59, 0.4))`,
                      padding: '36px 32px',
                      borderRadius: '16px',
                      border: `1px solid ${stat.color}30`,
                      transition: 'all 0.3s ease',
                      cursor: 'pointer'
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.transform = 'translateY(-5px)';
                      e.currentTarget.style.borderColor = `${stat.color}60`;
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.borderColor = `${stat.color}30`;
                    }}
                  >
                    <h4 style={{ 
                      color: stat.color, 
                      margin: '0 0 16px 0', 
                      fontSize: '1.1rem',
                      fontFamily: '"Montserrat", sans-serif',
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                      fontWeight: 500
                    }}>
                      {stat.title}
                    </h4>
                    <p style={{ 
                      fontSize: '3rem', 
                      fontWeight: 300, 
                      margin: '12px 0', 
                      color: '#F8FAFC',
                      fontFamily: '"Montserrat", sans-serif'
                    }}>
                      {stat.value}
                    </p>
                    <p style={{ 
                      color: '#94A3B8', 
                      margin: 0,
                      fontSize: '0.95rem',
                      fontFamily: '"Montserrat", sans-serif',
                      fontWeight: 300
                    }}>
                      {stat.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Data Sources */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.4), rgba(51, 65, 85, 0.3))',
              backdropFilter: 'blur(30px)',
              borderRadius: '20px',
              padding: '48px',
              border: '1px solid rgba(212, 175, 55, 0.2)',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.4)'
            }}>
              <h3 style={{ 
                color: '#D4AF37', 
                margin: '0 0 28px 0', 
                fontSize: '1.8rem',
                fontFamily: '"Playfair Display", Georgia, serif',
                fontWeight: 500
              }}>
                Data Sources & Methodology
              </h3>
              <div style={{ 
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '16px'
              }}>
                {[
                  { label: 'International', source: 'MakeMyTrip, Niyo Travel Report 2025' },
                  { label: 'Rail Transport', source: 'IRCTC, Indian Railways (6.9B passengers)' },
                  { label: 'Air Travel', source: 'AAI, DGCA (376M passengers FY24)' },
                  { label: 'Bus Services', source: 'redBus Report, Sciative Solutions' }
                ].map((item, idx) => (
                  <div key={idx} style={{ 
                    padding: '20px 24px', 
                    background: 'rgba(212, 175, 55, 0.05)', 
                    borderRadius: '12px',
                    border: '1px solid rgba(212, 175, 55, 0.15)'
                  }}>
                    <strong style={{ 
                      color: '#D4AF37',
                      fontSize: '0.9rem',
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                      fontFamily: '"Montserrat", sans-serif'
                    }}>
                      {item.label}
                    </strong>
                    <p style={{
                      margin: '8px 0 0 0',
                      color: '#CBD5E1',
                      fontSize: '0.9rem',
                      lineHeight: '1.5',
                      fontFamily: '"Montserrat", sans-serif',
                      fontWeight: 300
                    }}>
                      {item.source}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Footer */}
        <footer style={{
          textAlign: 'center',
          marginTop: '80px',
          padding: '40px 24px',
          borderTop: '1px solid rgba(212, 175, 55, 0.2)'
        }}>
          <p style={{ 
            margin: '0 0 8px 0',
            color: '#94A3B8',
            fontSize: '0.95rem',
            fontFamily: '"Montserrat", sans-serif',
            fontWeight: 300,
            lineHeight: 1.6
          }}>
            Comprehensive analysis compiled from MakeMyTrip, IRCTC, Airport Authority of India,<br/>
            redBus Travel Trends & Ministry of Tourism reports for 2025
          </p>
          <p style={{
            margin: '16px 0 0 0',
            color: '#D4AF37',
            fontSize: '0.85rem',
            fontFamily: '"Montserrat", sans-serif',
            letterSpacing: '1px',
            textTransform: 'uppercase'
          }}>
            Annual Travel Report 2025
          </p>
        </footer>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;1,400;1,500&family=Montserrat:wght@300;400;500;600&display=swap');
        
        @keyframes fadeIn {
          from { 
            opacity: 0; 
            transform: translateY(30px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        
        @keyframes slideIn {
          from { 
            opacity: 0; 
            transform: translateX(-30px); 
          }
          to { 
            opacity: 1; 
            transform: translateX(0); 
          }
        }
        
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        * {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
      `}</style>
    </div>
  );
};

export default IndianTravelViz2025;
