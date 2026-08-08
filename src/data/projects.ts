import xray from "@/assets/proj-xray.jpg";
import churn from "@/assets/proj-churn.jpg";
import netflix from "@/assets/proj-netflix.jpg";
import prime from "@/assets/proj-prime.jpg";
import blinkit from "@/assets/proj-blinkit.jpg";
import movies from "@/assets/proj-movies.jpg";
import swiggy from "@/assets/proj-swiggy.jpg";
import scraping from "@/assets/proj-scraping.jpg";

export type Category = "AI/ML" | "Data Analytics" | "SQL" | "Python";

export type Project = {
  slug: string;
  title: string;
  summary: string;
  tech: string[];
  categories: Category[];
  image: string;
  result?: string;
  featured?: boolean;
  github: string | null;
  demo: string | null;
  detail: {
    overview: string;
    problem: string;
    dataset: string;
    contribution: string[];
    approach: string[];
    results: string[];
    challenges: string[];
  };
};

export const PLACEHOLDER_NOTE = "Link coming soon";

export const projects: Project[] = [
  {
    slug: "chest-xray-pneumonia-detection",
    title: "Chest X-Ray Pneumonia Detection using CNN",
    summary:
      "Developed a CNN-based deep learning model to detect pneumonia from chest X-ray images.",
    tech: ["Python", "TensorFlow", "Keras", "CNN", "OpenCV"],
    categories: ["AI/ML", "Python"],
    image: xray,
    result: "Approximately 90% accuracy",
    featured: true,
    github: null,
    demo: null,
    detail: {
      overview:
        "A deep learning project that classifies chest X-ray images as normal or pneumonia using a convolutional neural network built with TensorFlow and Keras. The goal was to understand end-to-end computer vision workflow on medical imaging data: preprocessing, augmentation, model design, training, evaluation and error analysis.",
      problem:
        "Reading chest X-rays requires expert interpretation, and manual screening of large volumes of images is slow. The task was to build a model that can flag likely pneumonia cases from an X-ray image so that screening can be prioritised, while keeping false negatives as low as possible.",
      dataset:
        "A publicly available chest X-ray image dataset organised into normal and pneumonia classes, split into training, validation and test sets. Images vary in size, contrast and orientation, and the pneumonia class is more numerous than the normal class, so class imbalance had to be handled.",
      contribution: [
        "Built the full pipeline myself: data loading, preprocessing, model, training loop configuration and evaluation.",
        "Implemented image preprocessing with OpenCV (grayscale handling, resizing, normalisation).",
        "Designed and tuned the CNN architecture and training hyperparameters.",
        "Evaluated the model beyond accuracy using a confusion matrix, precision and recall.",
      ],
      approach: [
        "Resized all images to a fixed input size and scaled pixel values to the 0-1 range.",
        "Applied augmentation (rotation, zoom, width/height shift, horizontal flip) to reduce overfitting on the smaller normal class.",
        "Built a sequential CNN with stacked Conv2D + MaxPooling blocks, increasing filter depth, followed by flatten, dense and dropout layers with a sigmoid output.",
        "Trained with the Adam optimiser and binary cross-entropy loss, using validation loss for early stopping and model checkpointing.",
        "Compared the custom CNN against a transfer-learning baseline to sanity-check the results.",
      ],
      results: [
        "Reached approximately 90% accuracy on the held-out test set.",
        "Recall on the pneumonia class was the primary metric, since missing a positive case is costlier than a false alarm.",
        "Confusion-matrix analysis showed most errors were low-contrast normal images predicted as pneumonia.",
      ],
      challenges: [
        "Class imbalance between normal and pneumonia images skewed early models toward the majority class; augmentation and class weighting helped.",
        "Overfitting appeared after a few epochs; dropout and early stopping stabilised validation loss.",
        "Limited compute meant training in Google Colab with modest batch sizes and careful input sizing.",
      ],
    },
  },
  {
    slug: "customer-churn-prediction",
    title: "Customer Churn Prediction",
    summary:
      "Built a machine learning solution to analyze customer behavior and predict customer churn.",
    tech: ["Python", "Pandas", "Scikit-learn", "Machine Learning"],
    categories: ["AI/ML", "Python"],
    image: churn,
    featured: true,
    github: null,
    demo: null,
    detail: {
      overview:
        "A supervised machine learning project that predicts whether a customer is likely to churn, based on account, usage and contract attributes.",
      problem:
        "Retaining an existing customer is cheaper than acquiring a new one, so the business need is to identify at-risk customers early enough to act.",
      dataset:
        "A tabular customer dataset with demographic, contract and usage columns plus a binary churn label. Contains missing values and a mix of categorical and numeric features.",
      contribution: [
        "Performed data cleaning, encoding and exploratory analysis with Pandas.",
        "Trained and compared multiple classifiers with Scikit-learn.",
        "Interpreted feature importance to explain the drivers of churn.",
      ],
      approach: [
        "Cleaned missing values and converted categorical fields using label and one-hot encoding.",
        "Explored churn rate across contract type, tenure and monthly charges.",
        "Scaled numeric features and trained logistic regression, decision tree and random forest models.",
        "Compared models using accuracy, precision, recall and the confusion matrix.",
      ],
      results: [
        "The ensemble model gave the most balanced precision and recall among the models tried.",
        "Short tenure and month-to-month contracts stood out as the strongest churn indicators.",
      ],
      challenges: [
        "The churn class was the minority, so accuracy alone was misleading.",
        "Encoding high-cardinality categorical columns without inflating dimensionality.",
      ],
    },
  },
  {
    slug: "netflix-data-analysis-dashboard",
    title: "Netflix Data Analysis Dashboard",
    summary: "Created an interactive Power BI dashboard to analyze Netflix content and trends.",
    tech: ["Power BI", "Power Query", "DAX"],
    categories: ["Data Analytics"],
    image: netflix,
    featured: true,
    github: null,
    demo: null,
    detail: {
      overview:
        "An interactive Power BI report exploring the Netflix content catalogue by type, genre, country and release year.",
      problem:
        "Raw catalogue data is hard to read as a table. The goal was a report that answers content-mix questions in a few clicks.",
      dataset: "A public Netflix titles dataset with title, type, country, date added, rating and genre columns.",
      contribution: [
        "Cleaned and shaped the data in Power Query.",
        "Wrote DAX measures for content counts and year-over-year additions.",
        "Designed the report layout, slicers and drill-through pages.",
      ],
      approach: [
        "Split multi-value genre and country fields into a usable model in Power Query.",
        "Created a date table and DAX measures for titles added over time.",
        "Built visuals for type split, top genres, country distribution and rating mix with cross-filtering slicers.",
      ],
      results: [
        "A single-page report that answers content-mix and trend questions interactively.",
      ],
      challenges: [
        "Multi-valued columns needed unpivoting before they could be filtered correctly.",
        "Keeping the report readable while supporting several slicers.",
      ],
    },
  },
  {
    slug: "prime-video-dashboard",
    title: "Prime Video Dashboard",
    summary:
      "Created an interactive dashboard for analyzing Prime Video content and related insights.",
    tech: ["Power BI", "Power Query", "DAX"],
    categories: ["Data Analytics"],
    image: prime,
    github: null,
    demo: null,
    detail: {
      overview:
        "A Power BI dashboard summarising the Prime Video catalogue and its distribution across genres, ratings and release years.",
      problem: "Stakeholders needed a visual view of catalogue composition instead of spreadsheet exports.",
      dataset: "A public Prime Video titles dataset with type, genre, rating and release-year attributes.",
      contribution: [
        "Modelled and cleaned the dataset in Power Query.",
        "Built DAX measures and the full report layout.",
      ],
      approach: [
        "Standardised inconsistent genre and rating values.",
        "Created KPI cards for total titles, movies and shows.",
        "Added genre and release-year visuals with interactive slicers.",
      ],
      results: ["An interactive catalogue overview with filterable genre and year views."],
      challenges: ["Inconsistent category labels required normalisation before aggregation."],
    },
  },
  {
    slug: "blinkit-sales-dashboard",
    title: "Blinkit Sales Dashboard",
    summary: "Built an interactive dashboard to analyze sales, products and outlet performance.",
    tech: ["Power BI", "Power Query", "DAX"],
    categories: ["Data Analytics"],
    image: blinkit,
    featured: true,
    github: null,
    demo: null,
    detail: {
      overview:
        "A sales analytics dashboard covering total sales, item categories, outlet types and outlet size.",
      problem:
        "Sales data spread across item and outlet attributes made it hard to see which product types and outlet formats performed best.",
      dataset: "A Blinkit-style grocery sales dataset with item, outlet and sales columns.",
      contribution: [
        "Cleaned item attributes and handled missing weights in Power Query.",
        "Wrote DAX measures for total sales, average sales and item counts.",
        "Designed the dashboard layout and slicer interactions.",
      ],
      approach: [
        "Standardised item fat-content labels and filled missing values.",
        "Built KPI cards plus visuals for sales by item type, outlet type, outlet size and establishment year.",
        "Added slicers for outlet location and type.",
      ],
      results: ["A single dashboard that compares product and outlet performance side by side."],
      challenges: ["Missing item weights and duplicated category labels had to be resolved first."],
    },
  },
  {
    slug: "movie-dataset-analysis",
    title: "Movie Dataset Analysis",
    summary: "Performed SQL-based analysis on movie data to extract meaningful insights.",
    tech: ["SQL"],
    categories: ["SQL"],
    image: movies,
    github: null,
    demo: null,
    detail: {
      overview: "An analytical SQL project answering business questions about a movie dataset.",
      problem: "The raw tables needed structured querying to surface rating, genre and revenue patterns.",
      dataset: "Relational movie tables covering titles, genres, ratings and financial columns.",
      contribution: [
        "Wrote all queries from scratch.",
        "Documented each question and its result.",
      ],
      approach: [
        "Explored the schema and validated keys before joining tables.",
        "Used joins, aggregations, GROUP BY and HAVING for grouped metrics.",
        "Used window functions and CTEs for ranking and running totals.",
      ],
      results: ["A query set answering top-rated, genre-trend and revenue-distribution questions."],
      challenges: ["Handling NULLs in numeric columns so aggregates were not distorted."],
    },
  },
  {
    slug: "swiggy-dataset-analysis",
    title: "Swiggy Dataset Analysis",
    summary: "Analyzed Swiggy-related data using SQL queries to generate useful insights.",
    tech: ["SQL"],
    categories: ["SQL"],
    image: swiggy,
    github: null,
    demo: null,
    detail: {
      overview:
        "SQL analysis of restaurant, cuisine, rating and pricing data to answer food-delivery business questions.",
      problem: "Understanding which cuisines, cities and price bands perform best required grouped querying.",
      dataset: "A Swiggy-style dataset with restaurant, city, cuisine, rating and cost columns.",
      contribution: ["Designed and wrote the full query set and summarised the findings."],
      approach: [
        "Cleaned inconsistent rating and cost values inside queries.",
        "Aggregated by city and cuisine, then ranked results with window functions.",
      ],
      results: ["Insights on city-level restaurant density, cuisine popularity and rating vs cost patterns."],
      challenges: ["Text-formatted numeric columns needed casting before aggregation."],
    },
  },
  {
    slug: "shopsy-product-web-scraping",
    title: "Shopsy Product Web Scraping",
    summary: "Collected and analyzed e-commerce product information using Python web scraping.",
    tech: ["Python", "BeautifulSoup", "Requests", "Pandas"],
    categories: ["Python", "Data Analytics"],
    image: scraping,
    github: null,
    demo: null,
    detail: {
      overview:
        "A Python scraping project that collects product listings and turns them into a clean, analysable dataset.",
      problem: "Product details were only available as web pages, with no export or API.",
      dataset: "Self-collected product records: name, price, rating and review count.",
      contribution: [
        "Wrote the scraper, the parsing logic and the cleaning pipeline.",
        "Exported the structured dataset and ran the initial analysis.",
      ],
      approach: [
        "Fetched listing pages with Requests using headers and delays between requests.",
        "Parsed the HTML with BeautifulSoup and extracted fields per product card.",
        "Handled pagination, then cleaned and typed the data with Pandas before exporting to CSV.",
      ],
      results: ["A reusable structured dataset plus price and rating distribution summaries."],
      challenges: [
        "Markup changes and missing fields broke naive selectors, so parsing needed defensive checks.",
        "Requests had to be paced to stay polite to the server.",
      ],
    },
  },
];

export const categories = ["All", "AI/ML", "Data Analytics", "SQL", "Python"] as const;

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
