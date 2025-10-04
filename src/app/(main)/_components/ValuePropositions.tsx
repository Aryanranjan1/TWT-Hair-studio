
import { Star, Trophy, Scissors, MapPin } from 'lucide-react';

const stats = [
    {
        icon: Star,
        value: '4.8/5 rating',
        description: 'from 68+ clients'
    },
    {
        icon: Trophy,
        value: '15+ Years',
        description: 'Combined Stylist Experience'
    },
    {
        icon: Scissors,
        value: '1,000+',
        description: 'Hair Transformations'
    },
    {
        icon: MapPin,
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
            <div key={stat.value} className="text-center flex flex-col items-center">
                <stat.icon className="h-12 w-12 text-primary" />
                <p className="mt-4 text-xl font-bold">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
