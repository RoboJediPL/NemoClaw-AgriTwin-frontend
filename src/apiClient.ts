import { requestJson } from './api';

export type HerdCow = {
  id: string;
  name: string;
  tag: string;
  status: string;
  paddock: string;
  lactationDay: number;
  milkYield: string;
  feed: string;
  health: string;
  notes: string;
};

export type DashboardSnapshot = {
  overview: {
    label: string;
    value: string;
    note: string;
  }[];
  cows: HerdCow[];
  feedCost: {
    title: string;
    value: string;
    detail: string;
  }[];
  milk: {
    title: string;
    value: string;
    detail: string;
  }[];
  paddocks: {
    name: string;
    status: string;
    occupancy: string;
  }[];
};

export const mockCows: HerdCow[] = [
  {
    id: 'c-101',
    name: 'Mabel',
    tag: 'A102',
    status: 'Milking',
    paddock: 'North Ridge',
    lactationDay: 143,
    milkYield: '31.2 L',
    feed: '18.4 kg',
    health: 'Excellent',
    notes: 'High output, stable rumination, ready for the evening rotation.',
  },
  {
    id: 'c-118',
    name: 'Juno',
    tag: 'B219',
    status: 'Resting',
    paddock: 'Clover East',
    lactationDay: 98,
    milkYield: '27.8 L',
    feed: '17.1 kg',
    health: 'Good',
    notes: 'Recovered quickly after the last paddock move.',
  },
  {
    id: 'c-132',
    name: 'River',
    tag: 'C305',
    status: 'Fresh',
    paddock: 'Shade Valley',
    lactationDay: 28,
    milkYield: '22.4 L',
    feed: '16.2 kg',
    health: 'Monitoring',
    notes: 'Needs an extra check on feed intake after calving.',
  },
];

export const mockDashboard: DashboardSnapshot = {
  overview: [
    { label: 'Active herd', value: '148', note: '+4 from last rotation' },
    { label: 'Milk output', value: '1,324 L', note: '24h rolling average' },
    { label: 'Feed efficiency', value: '1.87', note: 'Kg feed per litre' },
    { label: 'Paddocks in use', value: '7 / 11', note: 'Two resting today' },
  ],
  cows: mockCows,
  feedCost: [
    { title: 'Morning ration', value: '$1,280', detail: '0.2% below budget' },
    { title: 'Supplements', value: '$430', detail: 'Balanced against yield' },
  ],
  milk: [
    { title: 'Yesterday', value: '1,285 L', detail: 'Peak at 6:10 AM' },
    { title: 'This week', value: '9,376 L', detail: 'Stable through rotation' },
  ],
  paddocks: [
    { name: 'North Ridge', status: 'Grazing', occupancy: '24 cows' },
    { name: 'Clover East', status: 'Recovering', occupancy: 'Rest day' },
    { name: 'Shade Valley', status: 'Fresh', occupancy: '16 cows' },
  ],
};

export async function getDashboardSnapshot(): Promise<DashboardSnapshot> {
  try {
    return await requestJson<DashboardSnapshot>('/api/dashboard');
  } catch {
    return mockDashboard;
  }
}

export async function getHerdCows(): Promise<HerdCow[]> {
  try {
    return await requestJson<HerdCow[]>('/api/cows');
  } catch {
    return mockCows;
  }
}
