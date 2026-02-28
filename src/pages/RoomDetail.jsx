import React, { useCallback, useEffect, useState } from 'react'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import { useParams } from 'react-router-dom'
import { roomlay1 } from '../component/Array'
import { FaGreaterThan, FaLessThan } from "react-icons/fa6";
import Testimonial from '../component/Testimonial'
import { motion, AnimatePresence } from "framer-motion";

const amenities = [
  { icon: '🚗', label: 'Parking Space' },
  { icon: '🏊', label: 'Swimming Pool' },
  { icon: '🏋️', label: 'Gym' },
  { icon: '🎬', label: 'Movie Room' },
  { icon: '🔒', label: 'Secured Environment' },
]

function RoomDetail() {
  const [count, setCount] = useState(0)
  const [direction, setDirection] = useState(1)

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { userId } = useParams();
  const room1 = roomlay1.find((room) => room.id === parseInt(userId));

  const handleNext = useCallback(() => {
    setDirection(1)
    setCount(prev => (prev + 1) % room1.image.length);
  }, [room1?.image?.length]);

  const handlePrev = useCallback(() => {
    setDirection(-1)
    setCount(prev => (prev - 1 + room1.image.length) % room1.image.length);
  }, [room1?.image?.length]);

  if (!room1) return (
    <div className="flex items-center justify-center h-screen bg-[#F9F6F0]">
      <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '2rem', color: '#7C6A46' }}>Property not found</p>
    </div>
  );

  const slideVariants = {
    enter: (dir) => ({ x: dir > 0 ? '100%' : '-100%', opacity: 0 }),
    center: { x: 0, opacity: 1, transition: { duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] } },
    exit: (dir) => ({ x: dir > 0 ? '-100%' : '100%', opacity: 0, transition: { duration: 0.35, ease: 'easeIn' } }),
  }

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Jost:wght@300;400;500;600&display=swap');

        .rd-root { font-family: 'Jost', sans-serif; background: #F9F6F0; }
        .rd-hero-title { font-family: 'Cormorant Garamond', serif; }

        .rd-badge {
          font-family: 'Jost', sans-serif;
          letter-spacing: 0.15em;
          font-size: 0.7rem;
          text-transform: uppercase;
          background: #7C6A46;
          color: #fff;
          padding: 6px 18px;
          font-weight: 500;
        }

        .rd-nav-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(255,255,255,0.92);
          border: none;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 4px 20px rgba(0,0,0,0.15);
          transition: background 0.2s, transform 0.2s;
          z-index: 10;
        }
        .rd-nav-btn:hover { background: #7C6A46; color: #fff; transform: translateY(-50%) scale(1.08); }
        .rd-nav-btn:hover svg { color: #fff; }

        .rd-section-label {
          font-family: 'Jost', sans-serif;
          font-size: 0.7rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #7C6A46;
          font-weight: 600;
          margin-bottom: 8px;
        }

        .rd-highlight-card {
          background: #fff;
          border: 1px solid #EAE4D9;
          padding: 16px 20px;
          display: flex;
          flex-direction: column;
          gap: 4px;
          transition: box-shadow 0.2s;
        }
        .rd-highlight-card:hover { box-shadow: 0 6px 24px rgba(124,106,70,0.12); }
        .rd-highlight-card span:first-child {
          font-family: 'Jost', sans-serif;
          font-size: 0.65rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #A0917A;
          font-weight: 500;
        }
        .rd-highlight-card span:last-child {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.5rem;
          color: #2A2318;
          font-weight: 400;
        }

        .rd-amenity-item {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 14px 18px;
          background: #fff;
          border: 1px solid #EAE4D9;
          font-size: 0.85rem;
          font-weight: 500;
          color: #3A3028;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .rd-amenity-item:hover { border-color: #7C6A46; box-shadow: 0 4px 16px rgba(124,106,70,0.1); }

        .rd-price-block {
          background: #2A2318;
          color: #F9F6F0;
          padding: 28px 32px;
          margin-top: 8px;
        }

        .rd-dot { width: 8px; height: 8px; border-radius: 50%; background: #D9D0C3; cursor: pointer; transition: background 0.2s, transform 0.2s; }
        .rd-dot.active { background: #7C6A46; transform: scale(1.3); }

        .rd-divider { height: 1px; background: linear-gradient(to right, transparent, #D9D0C3, transparent); margin: 28px 0; }
      `}</style>

      <div className="rd-root relative overflow-x-hidden">
        <Navbar />

        <div style={{ paddingTop: '80px', paddingBottom: '80px' }}>
          <div style={{ maxWidth: '820px', margin: '0 auto', padding: '0 20px' }}>

            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              style={{ textAlign: 'center', marginBottom: '36px' }}
            >
              <p className="rd-section-label">Exclusive Listing</p>
              <h1 className="rd-hero-title" style={{ fontSize: 'clamp(2rem, 5vw, 3.2rem)', fontWeight: 300, color: '#2A2318', lineHeight: 1.15, margin: 0 }}>
                Luxury {room1.type}
              </h1>
              <div style={{ width: '48px', height: '2px', background: '#7C6A46', margin: '16px auto 0' }} />
            </motion.div>

            {/* Main Card */}
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.1 }}
              style={{
                background: '#fff',
                boxShadow: '0 20px 60px rgba(42,35,24,0.10)',
                overflow: 'hidden',
                border: '1px solid #EAE4D9'
              }}
            >
              {/* Image Carousel */}
              <div style={{ position: 'relative', overflow: 'hidden', background: '#1A1510', lineHeight: 0 }}>
                <AnimatePresence custom={direction} initial={false}>
                  <motion.img
                    key={count}
                    src={room1.image[count]}
                    alt={room1.type}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    style={{
                      width: '100%',
                      height: 'clamp(260px, 48vw, 500px)',
                      objectFit: 'cover',
                      display: 'block',
                    }}
                  />
                </AnimatePresence>

                {/* Badge */}
                <div style={{ position: 'absolute', bottom: 20, left: 20 }}>
                  <span className="rd-badge">{room1.for}</span>
                </div>

                {/* Nav Buttons */}
                <button className="rd-nav-btn" style={{ left: 16 }} onMouseDown={handlePrev} aria-label="Previous">
                  <FaLessThan size={12} />
                </button>
                <button className="rd-nav-btn" style={{ right: 16 }} onMouseDown={handleNext} aria-label="Next">
                  <FaGreaterThan size={12} />
                </button>

                {/* Dots */}
                <div style={{ position: 'absolute', bottom: 18, right: 20, display: 'flex', gap: 6, alignItems: 'center' }}>
                  {room1.image.map((_, i) => (
                    <div
                      key={i}
                      className={`rd-dot${i === count ? ' active' : ''}`}
                      onClick={() => setCount(i)}
                    />
                  ))}
                </div>
              </div>

              {/* Content */}
              <div style={{ padding: 'clamp(24px, 5vw, 48px)' }}>

                {/* Description */}
                <div>
                  <p className="rd-section-label">Description</p>
                  <p style={{ fontFamily: "'Jost', sans-serif", color: '#5A5048', lineHeight: 1.8, fontSize: '0.95rem', margin: 0 }}>
                    {room1.description}
                  </p>
                </div>

                {/* Remark */}
                {room1.note && (
                  <>
                    <div className="rd-divider" />
                    <div style={{
                      borderLeft: '3px solid #7C6A46',
                      paddingLeft: '16px',
                      background: '#FDF9F4',
                      padding: '16px 20px',
                    }}>
                      <p className="rd-section-label" style={{ color: '#C0392B', marginBottom: 6 }}>Remark</p>
                      <p style={{ fontFamily: "'Cormorant Garamond', serif", color: '#C0392B', fontSize: '1.1rem', fontStyle: 'italic', margin: 0 }}>
                        {room1.note}
                      </p>
                    </div>
                  </>
                )}

                <div className="rd-divider" />

                {/* Price */}
                <div className="rd-price-block">
                  <p style={{ fontFamily: "'Jost', sans-serif", fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#A0917A', marginBottom: 8 }}>
                    Listing Price
                  </p>
                  <p className="rd-hero-title" style={{ fontSize: 'clamp(1.6rem, 4vw, 2.6rem)', fontWeight: 300, color: '#F9F6F0', margin: 0, letterSpacing: '-0.01em' }}>
                    {room1.price}
                  </p>
                </div>

                <div className="rd-divider" />

                {/* Highlights Grid */}
                <div>
                  <p className="rd-section-label">Room Highlights</p>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', gap: '12px', marginTop: '8px' }}>
                    {[
                      { label: 'Bedrooms', value: room1.rooms },
                      { label: 'Bathrooms', value: room1.bath },
                      { label: 'Interior/Exterior', value: room1.interior },
                      { label: 'Property Type', value: room1.type },
                      { label: 'Status', value: room1.status },
                      { label: 'Style', value: room1.style },
                    ].map(({ label, value }) => (
                      <div key={label} className="rd-highlight-card">
                        <span>{label}</span>
                        <span>{value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rd-divider" />

                {/* Amenities */}
                <div>
                  <p className="rd-section-label">Comfort Amenities</p>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '10px', marginTop: '8px' }}>
                    {amenities.map(({ icon, label }) => (
                      <div key={label} className="rd-amenity-item">
                        <span style={{ fontSize: '1.2rem' }}>{icon}</span>
                        <span>{label}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </motion.div>
          </div>
        </div>

        <Testimonial />
        <Footer />
      </div>
    </>
  )
}

export default RoomDetail
