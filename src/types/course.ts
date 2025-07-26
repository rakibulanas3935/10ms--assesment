export interface Instructor {
  id: string;
  name: string;
  qualifications: string[];
  avatar: string;
}

export interface CourseDetails {
  id: string;
  title: string;
  description: string;
  rating: {
    score: number;
    percentage: number;
    totalReviews: number;
  };
  price: {
    current: number;
    original: number;
    discount: number;
  };
  instructor: Instructor;
  thumbnail: string;
  previewVideos: string[];
}
