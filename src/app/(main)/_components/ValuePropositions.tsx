
import { Star, Trophy, Scissors, MapPin } from 'lucide-react';

const stats = [
    {
        icon: '⭐',
        value: '4.8/5 rating',
        description: 'from 68+ clients'
    },
    {
        icon: '🏆',
        value: '15+ Years',
        description: 'Combined Stylist Experience'
    },
    {
        icon: '💇',
        value: '1,000+',
        description: 'Hair Transformations'
    },
    {
        icon: '📍',
        value: 'Casa Tropicana, PJ',
        description: 'Conveniently Located'
    }
]

export function ValuePropositions() {
  return (
    <section className="py-16 sm:py-24 bg-secondary">
      <div className="container max-w-7xl">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.value} className="text-center">
                <div className="text-4xl">
                    {stat.icon}
                </div>
                <p className="mt-2 text-xl font-bold">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
