import { Heart, Bookmark } from 'lucide-react';

interface Hairstyle {
  name: string;
  popularity: string;
  category: string;
  image: string;
}

export function TrendingHairstyles() {
  const hairstyles = [
    {
      name: 'Korean Two-Block',
      popularity: '95%',
      category: 'Men',
      image: 'https://images.unsplash.com/photo-1659355751333-cf3aa64ec7cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080'
    },
    {
      name: 'Soft Waves',
      popularity: '92%',
      category: 'Women',
      image: 'https://images.unsplash.com/photo-1553519420-c78a0a7082b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080'
    },
    {
      name: 'Fade with Texture',
      popularity: '89%',
      category: 'Men',
      image: 'https://images.unsplash.com/photo-1768363646793-d58847947aec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080'
    },
    {
      name: 'Layered Bob',
      popularity: '87%',
      category: 'Women',
      image: 'https://images.unsplash.com/photo-1600632078977-22210c2e7414?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080'
    },
    {
      name: 'Undercut Pompadour',
      popularity: '85%',
      category: 'Men',
      image: 'https://images.unsplash.com/photo-1562055268-53091cacdb37?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080'
    },
    {
      name: 'Beach Waves',
      popularity: '88%',
      category: 'Women',
      image: 'https://images.unsplash.com/photo-1740593236449-78c950327cab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080'
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-[#EAF6FF]/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#1E293B] mb-4">Trending Hairstyles</h2>
          <p className="text-lg text-[#64748b]">Most popular styles this month</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {hairstyles.map((style, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-[#36A2FF]/50 hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={style.image}
                  alt={style.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                <div className="absolute top-3 right-3 flex gap-2">
                  <button className="p-2 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white transition-colors">
                    <Heart className="w-4 h-4 text-[#64748b] hover:text-red-500 hover:fill-red-500 transition-colors" />
                  </button>
                  <button className="p-2 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white transition-colors">
                    <Bookmark className="w-4 h-4 text-[#64748b] hover:text-[#007BFF] transition-colors" />
                  </button>
                </div>
              </div>

              <div className="p-5">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-lg text-[#1E293B]">{style.name}</h3>
                  <span className="px-3 py-1 rounded-full bg-[#EAF6FF] text-[#007BFF] text-xs font-medium">
                    {style.category}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-[#36A2FF] to-[#007BFF] rounded-full"
                      style={{ width: style.popularity }}
                    />
                  </div>
                  <span className="text-sm font-medium text-[#007BFF]">{style.popularity}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
