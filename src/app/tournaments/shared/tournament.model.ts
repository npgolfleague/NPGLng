export interface ITournament {
  id: number;
  league: string;
  course: string;
  date: Date;
  time: string;
  imageUrl: string;
  location?: {
      address: string
      city: string
      phone: string
  };
  pairings: IPairing[];
}

export interface IPairing {
  id: number;
  startingHole: number;
  golfer: string;
  quota?: number;
  skinsStrokes?: number;
}
