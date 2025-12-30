// // src/components/Certifications.js
import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';

import { certifications } from '../data/certifications';
import { FaLeaf, FaBasketShopping } from "react-icons/fa6";
const Certifications = () => {
  const [isFlipped, setIsFlipped] = useState({
   
    
    FaLeaf:false,
    FaBasketShopping:false,
  });

  const handleFlip = (key) => {
    setIsFlipped((prevState) => ({ ...prevState, [key]: !prevState[key] }));
  };

  return (
    <section id="certifications" className="py-16 sm:py-20 lg:py-24 bg-foreground/[0.02]">
      <div className="container text-center">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Certifications</h2>
          <p className="mt-2 text-muted-foreground">Recognized achievements in the field of technology.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {/* AWS Developer Certification */}
          {/* Item 1 */}
          <ReactCardFlip isFlipped={isFlipped.FaLeaf} flipDirection="horizontal">
            {/* Front Side */}
            <div className="rounded-md border border-border bg-card p-6 shadow-sm cursor-pointer" onClick={() => handleFlip('FaLeaf')}>
              <FaLeaf size={40} className="mx-auto mb-3 text-[#FF9900]" />
              <h3 className="text-lg font-semibold">Software Engineering Job Stimulation</h3>
              <p className="text-sm text-muted-foreground">Issued By: JP Morgan Chase & Co.</p>
              <p className="text-sm text-muted-foreground">July 2024 - July 2027</p>
              <a href="https://www.theforage.com/simulations/jpmorgan/software-engineering-btjx" target="_blank" rel="noopener noreferrer" className="inline-block mt-3 text-primary font-medium">View Certificate</a>
            </div>

            {/* Back Side */}
            <div className="rounded-md border border-border bg-[#FF9900] p-4 text-white cursor-pointer" onClick={() => handleFlip('awsDev')}>
              <img src={certifications[0].image} alt="Software Engineering Job Stimulation" className="w-full h-auto rounded-md" loading="lazy" />
            </div>
          </ReactCardFlip>

          {/* AWS Cloud Practitioner Certification */}
          {/* Item 2 */}
          <ReactCardFlip isFlipped={isFlipped.FaBasketShopping} flipDirection="horizontal">
            {/* Front Side */}
            <div className="rounded-md border border-border bg-card p-6 shadow-sm cursor-pointer" onClick={() => handleFlip('FaBasketShopping')}>
              <FaBasketShopping size={40} className="mx-auto mb-3 text-[#FF9900]" />
              <h3 className="text-lg font-semibold">Data Visualisation</h3>
              <p className="text-sm text-muted-foreground">Issued By: TATA Group</p>
              <p className="text-sm text-muted-foreground">July 2024 - September 2027</p>
              <a href=" https://www.theforage.com/simulations/tata/data-visualisation-p5xo" target="_blank" rel="noopener noreferrer" className="inline-block mt-3 text-primary font-medium">View Certificate</a>
            </div>

            {/* Back Side */}
            <div className="rounded-md border border-border bg-[#FF9900] p-4 text-white cursor-pointer" onClick={() => handleFlip(' FaBasketShopping')}>
              <img src={certifications[1].image} alt="Data Visualisation<" className="w-full h-auto rounded-md" loading="lazy" />
            </div>
          </ReactCardFlip>

          {/* GitHub Foundations Certification */}
          {/* Item 3 */}
          <ReactCardFlip isFlipped={isFlipped.FaBasketShopping} flipDirection="horizontal">
            {/* Front Side */}
            <div className="rounded-md border border-border bg-card p-6 shadow-sm cursor-pointer" onClick={() => handleFlip(' FaBasketShopping')}>
              < FaBasketShopping size={40} className="mx-auto mb-3 text-foreground" />
              <h3 className="text-lg font-semibold">Technology Job</h3>
              <p className="text-sm text-muted-foreground">Issued By: Delloite</p>
              <p className="text-sm text-muted-foreground">July 2024 - March 2028</p>
              <a href="https://www.theforage.com/simulations/deloitte-au/technology-nmwn" target="_blank" rel="noopener noreferrer" className="inline-block mt-3 text-primary font-medium">View Certificate</a>
            </div>

            {/* Back Side */}
            <div className="rounded-md border border-border bg-foreground p-4 text-white cursor-pointer" onClick={() => handleFlip('FaBasketShopping')}>
              <img src={certifications[2].image} alt="Technology Job" className="w-full h-auto rounded-md" loading="lazy" />
            </div>
          </ReactCardFlip>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
