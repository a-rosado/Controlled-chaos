export default function PlatinumSponsor() {
    return (
      <section className="bg-black text-white py-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 uppercase tracking-wide">
            Platinum Sponsor
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center">
            <div>
              <img
                src="/public/file.svg"
                alt="Sponsor 1"
                className="mx-auto w-12 h-12 sm:w-16 sm:h-16"
              />
              <p className="mt-2 text-sm sm:text-base">Sponsor 1</p>
            </div>
            <div>
              <img
                src="/public/next.svg"
                alt="Sponsor 2"
                className="mx-auto w-12 h-12 sm:w-16 sm:h-16"
              />
              <p className="mt-2 text-sm sm:text-base">Sponsor 2</p>
            </div>
            <div>
              <img
                src="/sponsor-logo3.png"
                alt="Sponsor 3"
                className="mx-auto w-12 h-12 sm:w-16 sm:h-16"
              />
              <p className="mt-2 text-sm sm:text-base">Sponsor 3</p>
            </div>
            <div>
              <img
                src="/sponsor-logo4.png"
                alt="Sponsor 4"
                className="mx-auto w-12 h-12 sm:w-16 sm:h-16"
              />
              <p className="mt-2 text-sm sm:text-base">Sponsor 4</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
  