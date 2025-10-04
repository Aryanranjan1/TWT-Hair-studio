
import { Star, Trophy, Scissors, MapPin } from 'lucide-react';
import { Motion } from '@/components/ui/motion';

const stats = [
  {
    icon: Star,
    value: '4.8/5',
    description: 'Rating from 68+ clients',
  },
  {
    icon: Trophy,
    value: '15+ Years',
    description: 'Combined Stylist Experience',
  },
  {
    icon: Scissors,
    value: '1,000+',
    description: 'Hair Transformations',
  },
  {
    icon: MapPin,
    value: 'Casa Tropicana, PJ',
    description: 'Conveniently Located',
  },
];

export function ValuePropositions() {
  return (
    <section className="py-16 sm:py-24 bg-secondary">
      <div className="container max-w-7xl">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <Motion key={index} variant='hop-in' delay={index * 0.1} className="flex flex-col items-center">
              <stat.icon className="h-12 w-12 text-primary mb-4" />
              <p className="text-3xl font-bold font-headline">{stat.value}</p>
              <p className="text-sm text-muted-foreground mt-1">{stat.description}</p>
            </Motion>
          ))}
        </div>
      </div>
    </section>
  );
}
