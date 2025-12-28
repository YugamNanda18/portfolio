import React from 'react';

const Education = () => {
  return (
    <section id="education" className="py-16 sm:py-20 lg:py-24">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Education</h2>
        </div>

        <div className="space-y-4">
          <div className="rounded-md border border-border bg-card p-5 shadow-sm">
            <h3 className="text-lg font-semibold">Bachelor of Technology in Information Technology</h3>
            <h4 className="text-sm text-muted-foreground">Swami Keshwanad Institute of Technology Managment & Gramothan, Jaipur</h4>
            <p className="text-xs text-muted-foreground mt-1">August 2024 - August 2028</p>
            <p className="mt-2"><strong>CGPA:</strong> 8.04</p>
          </div>
          <div className="rounded-md border border-border bg-card p-5 shadow-sm">
            <h3 className="text-lg font-semibold">Intermediate</h3>
            <h4 className="text-sm text-muted-foreground">Cambridge Court High School, Jaipur</h4>
            <p className="text-xs text-muted-foreground mt-1">April 2023 - June 2024</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;