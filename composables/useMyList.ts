/**
 * Nuxt提供了useState组合函数，用于在组件之间创建响应式且适用于SSR的共享状态。
 * useState是一个适用于SSR的ref替代品。
 * 它的值将在服务器端渲染后保留（在客户端渲染期间进行hydration），并通过唯一的键在所有组件之间共享。
 */
export const useMyList = () => {
  return useState('myList', () => ({
    roadAnalysis: [
      {
        moduleTitle: "Road Analysis",
        moduleDescribe: "",
        title: "Pavement Damage Analysis",
        resource:
          "/gvi-minio/gvi-us-2024-04-15/gvi-us-2024-04-15-1713171386061.png",
        url: "",
        sort: 1,
        extendMap: {},
      },
      {
        moduleTitle: "",
        moduleDescribe: "",
        title: "Powerline Analysis",
        resource:
          "/gvi-minio/gvi-us-2024-04-15/gvi-us-2024-04-15-1713171390461.png",
        url: "",
        sort: 2,
        extendMap: {},
      },
      {
        moduleTitle: "",
        moduleDescribe: "",
        title: "Road Section",
        resource:
          "/gvi-minio/gvi-us-2024-04-15/gvi-us-2024-04-15-1713171407645.png",
        url: "",
        sort: 3,
        extendMap: {},
      },
      {
        moduleTitle: "",
        moduleDescribe: "",
        title: "Vehicle Passability Analysis",
        resource:
          "/gvi-minio/gvi-us-2024-04-15/gvi-us-2024-04-15-1713171434587.png",
        url: "",
        sort: 4,
        extendMap: {},
      },
      {
        moduleTitle: "",
        moduleDescribe: "",
        title: "Viewshed Analysis",
        resource:
          "/gvi-minio/gvi-us-2024-04-15/gvi-us-2024-04-15-1713171445019.png",
        url: "",
        sort: 5,
        extendMap: {},
      },
    ],
    allPic: [
      {
        moduleTitle: "Efficient Vector Editor",
        moduleDescribe:
          '["Vector mapping with multi-source data fusion","3D mapping based on point clouds","3D mapping based on imagery (panoramic/planar/ortho)","Over 100 vector mapping, processing, editing tools","Multiple output formats, seamless integration with GIS, CAD and simulation platform"]',
        title: "",
        resource:
          "/gvi-minio/gvi-us-2024-04-15/gvi-us-2024-04-15-1713171936080.png",
        url: "",
        sort: 1,
        extendMap: {},
      },
      {
        moduleTitle: "Floor Plan",
        moduleDescribe:
          '["Automatic vectorisation function for floor plan. ","DXF export for floor plan vectors. ","One-click export for blue print."]',
        title: "",
        resource:
          "/gvi-minio/gvi-us-2024-04-15/gvi-us-2024-04-15-1713163341118.png",
        url: "",
        sort: 2,
        extendMap: {},
      },
      {
        moduleTitle: "Facade Survey",
        moduleDescribe:
          '["Provide multi-mode baseline collection method","Provide convenient facade element drawing tools","Using panoramic images to assist facade survey","Provide accurate length and area calculation funtions, and support exporting tables in other formats","Exporting DXF, orthophoto result data, etc"]',
        title: "",
        resource:
          "/gvi-minio/gvi-us-2024-04-15/gvi-us-2024-04-15-1713163311187.png",
        url: "",
        sort: 3,
        extendMap: {},
      },
    ],
    powerful: [
      {
        moduleTitle: "AI Feature Extraction",
        moduleDescribe: "",
        title: "Automatic extraction of road elements based on AI",
        resource:
          "/gvi-minio/gvi-us-2024-04-22/gvi-us-2024-04-22-1713768271866.mp4",
        url: "",
        sort: 1,
        extendMap: {},
      },
      {
        moduleTitle: "Powerful Point Cloud Classification",
        moduleDescribe:
          "LiDAR360 MLS has nearly 100 point cloud processing and editing tools. It supports point cloud and camera images of mainstream mobile mapping systems on the market for processing and mapping. Combination display of multiple attributes, with additional attributes, to meet more application requirements.",
        title: "Template Matching",
        resource:
          "/gvi-minio/gvi-us-2024-04-22/gvi-us-2024-04-22-1713768277866.mp4",
        url: "",
        sort: 2,
        extendMap: {},
      },
      {
        moduleTitle: "Powerful Point Cloud Classification",
        moduleDescribe:
          "LiDAR360 MLS has nearly 100 point cloud processing and editing tools. It supports point cloud and camera images of mainstream mobile mapping systems on the market for processing and mapping. Combination display of multiple attributes, with additional attributes, to meet more application requirements.",
        title: "AI-based road facilities extraction",
        resource:
          "/gvi-minio/gvi-us-2024-04-22/gvi-us-2024-04-22-1713768282770.mp4",
        url: "",
        sort: 3,
        extendMap: {},
      },
    ],
    urban: [
      {
        moduleTitle: "Urban Forestry",
        moduleDescribe:
          "LiDAR360MLS supports detailed classification of tree trunks and canopies, individual tree segmentation, and calculation of over 10 parameters. It provides seed point extraction and parameter calculation independent of individual tree segmentation. It also supports generating and analyzing thematic maps of ecological landscapes.",
        title: null,
        resource:
          "/gvi-minio/gvi-us-2024-04-09/gvi-us-2024-04-09-1712658838404.png",
        url: null,
        sort: null,
        extendMap: {},
      },
      {
        moduleTitle: "Urban Forestry",
        moduleDescribe:
          "LiDAR360MLS supports detailed classification of tree trunks and canopies, individual tree segmentation, and calculation of over 10 parameters. It provides seed point extraction and parameter calculation independent of individual tree segmentation. It also supports generating and analyzing thematic maps of ecological landscapes.",
        title: null,
        resource:
          "/gvi-minio/gvi-us-2024-04-09/gvi-us-2024-04-09-1712658834637.png",
        url: null,
        sort: null,
        extendMap: {},
      },
    ],
    oneStop: [
      {
        moduleTitle: "One-Stop Point Cloud Preprocessing",
        moduleDescribe: "",
        title: "Trajectory Jumps Identify and Repair",
        resource:
          "/gvi-minio/gvi-us-2024-04-15/gvi-us-2024-04-15-1713169750065.png",
        url: "",
        sort: 1,
        extendMap: {},
      },
      {
        moduleTitle: "One-Stop Point Cloud Preprocessing",
        moduleDescribe: "",
        title: "Global Optimization",
        resource:
          "/gvi-minio/gvi-us-2024-04-15/gvi-us-2024-04-15-1713169772077.png",
        url: "",
        sort: 2,
        extendMap: {},
      },
      {
        moduleTitle: "One-Stop Point Cloud Preprocessing",
        moduleDescribe: "",
        title: "Point Cloud Colorization",
        resource:
          "/gvi-minio/gvi-us-2024-04-15/gvi-us-2024-04-15-1713169775714.png",
        url: "",
        sort: 3,
        extendMap: {},
      },
    ],
    multiPlatform: [
      {
        moduleTitle: "Multi-Platform Support 100 Processing And Editing Tools",
        moduleDescribe:
          "LiDAR360 MLS has nearly 100 point cloud processing and editing tools. It supports point cloud and camera images of mainstream mobile mapping systems on the market for processing and mapping. Combination display of multiple attributes, with additional attributes, to meet more application requirements.",
        title: "",
        resource:
          "/gvi-minio/gvi-us-2024-04-23/gvi-us-2024-04-23-1713860758662.png",
        url: "",
        sort: 1,
        extendMap: {},
      },
      {
        moduleTitle: "Multi-Platform Support100 Processing And Editing Tools",
        moduleDescribe:
          "LiDAR360 MLS has nearly 100 point cloud processing and editing tools. It supports point cloud and camera images of mainstream mobile mapping systems on the market for processing and mapping. Combination display of multiple attributes, with additional attributes, to meet more application requirements.",
        title: "",
        resource:
          "/gvi-minio/gvi-us-2024-04-23/gvi-us-2024-04-23-1713860765017.png",
        url: "",
        sort: 2,
        extendMap: {},
      },
      {
        moduleTitle: "Multi-Platform Support100 Processing And Editing Tools",
        moduleDescribe:
          "LiDAR360 MLS has nearly 100 point cloud processing and editing tools. lt supports point cloud and cameraimages of mainstream mobile mapping systems on the market for processing and mapping. Combinationdisplay of multiple attributes, with additional attributes, to meet more application requirements.",
        title: "",
        resource:
          "/gvi-minio/gvi-us-2024-04-23/gvi-us-2024-04-23-1713860770281.png",
        url: "",
        sort: 3,
        extendMap: {},
      },
      {
        moduleTitle: "",
        moduleDescribe: "",
        title: "",
        resource:
          "/gvi-minio/gvi-us-2024-04-23/gvi-us-2024-04-23-1713860775567.png",
        url: "",
        sort: 4,
        extendMap: {},
      },
      {
        moduleTitle: "",
        moduleDescribe: "",
        title: "",
        resource:
          "/gvi-minio/gvi-us-2024-04-23/gvi-us-2024-04-23-1713860781198.png",
        url: "",
        sort: 5,
        extendMap: {},
      },
      {
        moduleTitle: "",
        moduleDescribe: "",
        title: "",
        resource:
          "/gvi-minio/gvi-us-2024-04-23/gvi-us-2024-04-23-1713860786215.png",
        url: "",
        sort: 6,
        extendMap: {},
      },
    ],
    aiFeature: [
      {
        moduleTitle: "Powerful Point Cloud Classification",
        moduleDescribe: "",
        title: "Urban Road",
        resource:
          "/gvi-minio/gvi-us-2024-04-15/gvi-us-2024-04-15-1713168468075.png",
        url: "",
        sort: 1,
        extendMap: {},
      },
      {
        moduleTitle: "AI Feature Extraction",
        moduleDescribe: "",
        title: "Forestry",
        resource:
          "/gvi-minio/gvi-us-2024-04-15/gvi-us-2024-04-15-1713168474351.png",
        url: "",
        sort: 2,
        extendMap: {},
      },
      {
        moduleTitle: "AI Feature Extraction",
        moduleDescribe: "",
        title: "Underground Parking Garage",
        resource:
          "/gvi-minio/gvi-us-2024-04-15/gvi-us-2024-04-15-1713168477853.png",
        url: "",
        sort: 3,
        extendMap: {},
      },
      {
        moduleTitle: "AI Feature Extraction",
        moduleDescribe: "",
        title: "Shopping Mall",
        resource:
          "/gvi-minio/gvi-us-2024-04-15/gvi-us-2024-04-15-1713168481728.png",
        url: "",
        sort: 4,
        extendMap: {},
      },
      {
        moduleTitle: "",
        moduleDescribe: "",
        title: "Railway",
        resource:
          "/gvi-minio/gvi-us-2024-04-15/gvi-us-2024-04-15-1713168488210.png",
        url: "",
        sort: 5,
        extendMap: {},
      },
    ],
    featureVideos: [
      {
        moduleTitle: "Feature Videos",
        moduleDescribe: "",
        title:
          "LiDAR360MLS & DJI L2 | Transforming Road Surveys with Aerial Innovation",
        resource:
          "/gvi-minio/gvi-us-2024-04-15/gvi-us-2024-04-15-1713151825827.webp",
        url: "https://youtu.be/JLpCdFu8rJo",
        sort: 1,
        extendMap: {},
      },
      {
        moduleTitle: "",
        moduleDescribe: "",
        title:
          "LiDAR360MLS V7 Highlights | Experience Advanced Machine Learning with No Coding",
        resource:
          "/gvi-minio/gvi-us-2024-04-15/gvi-us-2024-04-15-1713151833163.webp",
        url: "https://youtu.be/rItxj6teceI",
        sort: 2,
        extendMap: {},
      },
      {
        moduleTitle: "",
        moduleDescribe: "",
        title: "LiDAR360MLS | Extract Road Surface Features with AI in one click",
        resource:
          "/gvi-minio/gvi-us-2024-04-15/gvi-us-2024-04-15-1713151929022.webp",
        url: "https://youtu.be/6yEem2EzCFU?si=9MfZZhQoZfoS7TNi",
        sort: 3,
        extendMap: {},
      },
      {
        moduleTitle: "",
        moduleDescribe: "",
        title:
          "LiDAR360MLS | Semantic Segmentation Results and Object Segmentation Results",
        resource:
          "/gvi-minio/gvi-us-2024-04-15/gvi-us-2024-04-15-1713151938173.webp",
        url: "https://youtu.be/xw9frtzlEkQ?si=gX_QQ_FVeFJnwrL6",
        sort: 4,
        extendMap: {},
      },
      {
        moduleTitle: "",
        moduleDescribe: "",
        title: "LiDAR360MLS | Real-World Case in Latvia",
        resource:
          "/gvi-minio/gvi-us-2024-04-15/gvi-us-2024-04-15-1713152552814.webp",
        url: "https://youtu.be/mX9okqwTt6Q",
        sort: 5,
        extendMap: {},
      },
      {
        moduleTitle: "",
        moduleDescribe: "",
        title: "LiDAR360MLS | Success Story in Latvia",
        resource:
          "/gvi-minio/gvi-us-2024-04-15/gvi-us-2024-04-15-1713152559889.webp",
        url: "https://youtu.be/9Rnus_SpQMo",
        sort: 6,
        extendMap: {},
      },
      {
        moduleTitle: "",
        moduleDescribe: "",
        title: "LiDAR360 MLS | Facade Survey Results",
        resource:
          "/gvi-minio/gvi-us-2024-04-15/gvi-us-2024-04-15-1713152054191.webp",
        url: "https://youtu.be/5NF3_X7VYLc?si=D33PdSgHj-AwmaY8",
        sort: 7,
        extendMap: {},
      },
      {
        moduleTitle: "",
        moduleDescribe: "",
        title: "LiDAR360MLS | Single wood picture managem",
        resource:
          "/gvi-minio/gvi-us-2024-04-15/gvi-us-2024-04-15-1713152800074.webp",
        url: "https://youtu.be/6MBGS9ODJYg",
        sort: 8,
        extendMap: {},
      },
    ],
    applications: [
      {
        moduleTitle: "Applications",
        moduleDescribe: "",
        title: "Urban Asset Survey",
        resource:
          "/gvi-minio/gvi-us-2024-04-23/gvi-us-2024-04-23-1713855523665.png",
        url: "",
        sort: 1,
        extendMap: {},
      },
      {
        moduleTitle: "",
        moduleDescribe: "",
        title: "Urban Forestry Survey and Analysis",
        resource:
          "/gvi-minio/gvi-us-2024-04-23/gvi-us-2024-04-23-1713855529715.png",
        url: "",
        sort: 2,
        extendMap: {},
      },
      {
        moduleTitle: "",
        moduleDescribe: "",
        title: "Urban Powerline Survey and Analysis",
        resource:
          "/gvi-minio/gvi-us-2024-04-23/gvi-us-2024-04-23-1713855534894.png",
        url: "",
        sort: 3,
        extendMap: {},
      },
      {
        moduleTitle: "",
        moduleDescribe: "",
        title: "Road Safety Analysis",
        resource:
          "/gvi-minio/gvi-us-2024-04-23/gvi-us-2024-04-23-1713855540526.png",
        url: "",
        sort: 4,
        extendMap: {},
      },
      {
        moduleTitle: "",
        moduleDescribe: "",
        title: "Road Inspection and Maintenance",
        resource:
          "/gvi-minio/gvi-us-2024-04-23/gvi-us-2024-04-23-1713855545973.png",
        url: "",
        sort: 5,
        extendMap: {},
      },
      {
        moduleTitle: "",
        moduleDescribe: "",
        title: "Road Section Analysis",
        resource:
          "/gvi-minio/gvi-us-2024-04-23/gvi-us-2024-04-23-1713855551067.png",
        url: "",
        sort: 6,
        extendMap: {},
      },
      {
        moduleTitle: "",
        moduleDescribe: "",
        title: "HD Map Production and Labeling",
        resource:
          "/gvi-minio/gvi-us-2024-04-23/gvi-us-2024-04-23-1713855556087.png",
        url: "",
        sort: 7,
        extendMap: {},
      },
      {
        moduleTitle: "",
        moduleDescribe: "",
        title: "Digital Twin and 3D Real Scene",
        resource:
          "/gvi-minio/gvi-us-2024-04-23/gvi-us-2024-04-23-1713855561006.png",
        url: "",
        sort: 8,
        extendMap: {},
      },
    ],
  }))
}
