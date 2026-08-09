export const profile = {
  name: "SHATHANA P",
  degree: "B.Sc. Artificial Intelligence & Machine Learning",
  college: "RVS College of Arts and Science",
  cgpa: "8.90 / 10",
  title: "Aspiring Data Analyst & Data Engineer | AI/ML Enthusiast",
  tagline: "I build data-driven solutions using Python, SQL, Power BI and Machine Learning.",
  email: "shathana562@gmail.com",
  github: "https://github.com/PShathana17",
  linkedin: "https://www.linkedin.com/in/shathana-palani-9bbbb138b",
};

import resumeAsset from "@/assets/resume.pdf.asset.json";
import profileImage from "@/assets/shathana-profile.jpg.asset.json";

export const RESUME_PATH = resumeAsset.url;
export const PROFILE_IMAGE = profileImage.url;

export const skillGroups = [
  { title: "Programming", items: ["Python", "SQL"] },
  { title: "Data Analysis", items: ["Pandas", "Matplotlib", "Power BI"] },
  {
    title: "AI / Machine Learning",
    items: ["Machine Learning", "Deep Learning", "CNN", "NLP", "Transformers", "TensorFlow"],
  },
  { title: "Tools", items: ["GitHub", "Google Colab", "VS Code"] },
];

export const experience = [
  {
    title: "AI/ML Development",
    body: "Machine learning and deep learning project development using Python, TensorFlow and related AI/ML tools.",
  },
  {
    title: "Data Analytics",
    body: "Data cleaning, analysis and visualization using Python, Pandas, SQL and Power BI.",
  },
  {
    title: "Power BI",
    body: "Created interactive dashboards for data visualization and business insights.",
  },
  {
    title: "Web Scraping",
    body: "Collected and analyzed e-commerce data using Python, Requests and BeautifulSoup.",
  },
];

export const certifications = [
  { name: "Data Visualization", issuer: "Tata" },
  { name: "Python: Analyzing Data", issuer: "Infosys" },
  { name: "GenAI Powered Data Analytics", issuer: "Tata" },
  { name: "Data Analyst Foundation", issuer: "Udemy" },
];
