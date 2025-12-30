import React from 'react';

const Careers = () => {
    return (
       <div className="bg-[#1A1A1A] font-['Work_Sans',_sans-serif] text-[#F5F5F5]">
  <div className="relative flex min-h-screen w-full flex-col">
    <div className="flex-grow">
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-['Playfair_Display',_serif] font-bold text-[#D4A056] mb-4">
            Join Our Story
          </h1>
          <p className="text-lg md:text-xl text-[#BDBDBD] max-w-3xl mx-auto">
            We're a passionate team dedicated to giving old books new life. If
            you share our love for literature and innovation, we'd love to hear
            from you.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-2 lg:row-span-2 rounded-[0.75rem] bg-[#242424] p-6 flex flex-col items-center justify-center text-center">
            <span className="material-symbols-outlined text-6xl text-[#D4A056] mb-4">
              diversity_3
            </span>
            <h3 className="text-2xl font-bold mb-2">Our Culture</h3>
            <p className="text-[#BDBDBD]">
              We foster a collaborative and inclusive environment where every
              voice is heard. Our team is a mix of book lovers, tech
              enthusiasts, and creative minds, all working together to build
              something special. We value curiosity, kindness, and a shared
              passion for our mission.
            </p>
          </div>
          <div className="rounded-[0.75rem] bg-[#242424] p-6">
            <h3 className="text-2xl font-bold mb-3">Employee Testimonials</h3>
            <blockquote className="border-l-4 border-[#D4A056] pl-4">
              <p className="text-[#F5F5F5] italic mb-2">
                "Working at BookHaven is a dream. I get to combine my passion
                for books with cutting-edge technology every single day."
              </p>
              <cite className="text-[#888888] not-italic">
                -Sunina, Software Engineer
              </cite>
            </blockquote>
          </div>
          <div className="rounded-[0.75rem] bg-[#242424] p-6">
            <h3 className="text-2xl font-bold mb-3">Perks & Benefits</h3>
            <ul className="space-y-2 text-[#BDBDBD]">
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#D4A056] text-lg">
                  local_library
                </span>
                <span>Generous book allowance</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#D4A056] text-lg">
                  schedule
                </span>
                <span>Flexible working hours</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#D4A056] text-lg">
                  health_and_safety
                </span>
                <span>Comprehensive health benefits</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12">
          <h2 className="text-3xl md:text-4xl font-['Playfair_Display',_serif] font-bold text-center mb-8">
            Available Openings
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex flex-col rounded-[0.75rem] bg-[#242424] p-6">
              <div className="flex-grow">
                <h3 className="text-xl font-bold text-[#D4A056]">
                  Senior Frontend Developer
                </h3>
                <div className="flex items-center gap-4 text-sm text-[#888888] mt-1 mb-4">
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-base">
                      location_on
                    </span>{" "}
                    Remote
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-base">
                      work
                    </span>{" "}
                    Full-time
                  </span>
                </div>
                <p className="text-[#BDBDBD] text-sm">
                  We're looking for an experienced Frontend Developer to help us
                  build a beautiful and intuitive user experience. You'll be
                  working with modern technologies to bring our platform to the
                  next level.
                </p>
              </div>
              <button className="mt-6 flex w-full max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-[0.5rem] h-10 px-4 bg-[#D4A056] text-[#1A1A1A] text-sm font-bold leading-normal tracking-[0.015em]">
                <span className="truncate">Apply Now</span>
              </button>
            </div>
            <div className="flex flex-col rounded-[0.75rem] bg-[#242424] p-6">
              <div className="flex-grow">
                <h3 className="text-xl font-bold text-[#D4A056]">
                  Marketing Specialist
                </h3>
                <div className="flex items-center gap-4 text-sm text-[#888888] mt-1 mb-4">
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-base">
                      location_on
                    </span>{" "}
                    Kakkanad 
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-base">
                      work
                    </span>{" "}
                    Full-time
                  </span>
                </div>
                <p className="text-[#BDBDBD] text-sm">
                  Join our marketing team to spread the word about BookHaven.
                  You'll develop and execute campaigns that connect with book
                  lovers everywhere and grow our community of buyers and
                  sellers.
                </p>
              </div>
              <button className="mt-6 flex w-full max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-[0.5rem] h-10 px-4 bg-[#D4A056] text-[#1A1A1A] text-sm font-bold leading-normal tracking-[0.015em]">
                <span className="truncate">Apply Now</span>
              </button>
            </div>
            <div className="flex flex-col rounded-[0.75rem] bg-[#242424] p-6">
              <div className="flex-grow">
                <h3 className="text-xl font-bold text-[#D4A056]">
                  Customer Support Agent
                </h3>
                <div className="flex items-center gap-4 text-sm text-[#888888] mt-1 mb-4">
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-base">
                      location_on
                    </span>{" "}
                    Remote
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-base">
                      work
                    </span>{" "}
                    Part-time
                  </span>
                </div>
                <p className="text-[#BDBDBD] text-sm">
                  Be the friendly voice of BookHaven. Help our users navigate
                  the platform, answer their questions, and ensure they have a
                  wonderful experience finding or selling their treasured
                  books.
                </p>
              </div>
              <button className="mt-6 flex w-full max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-[0.5rem] h-10 px-4 bg-[#D4A056] text-[#1A1A1A] text-sm font-bold leading-normal tracking-[0.015em]">
                <span className="truncate">Apply Now</span>
              </button>
            </div>
            <div className="md:col-span-2 lg:col-span-3 rounded-[0.75rem] bg-[#242424] p-6 text-center">
              <h3 className="text-xl font-bold">
                Don't see a role for you?
              </h3>
              <p className="text-[#BDBDBD] mt-2 mb-4">
                We're always looking for talented people. Send us your resume
                and tell us why you'd be a great fit for the BookHaven team.
              </p>
              <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-[0.5rem] h-10 px-4 bg-[#D4A056]/20 text-[#D4A056] text-sm font-bold leading-normal tracking-[0.015em] mx-auto">
                <span className="truncate">Submit Your Resume</span>
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</div>
    );
}

export default Careers;
