export interface ICategory {
  id: number;
  title: string;
}
export interface IPost {
  id: number;
  title: string;
  content: string;
  status: "published" | "draft" | "rejected";
  createdAt: string;
  category: { id: number };
}
export interface IUser {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  login_count: number;
}
