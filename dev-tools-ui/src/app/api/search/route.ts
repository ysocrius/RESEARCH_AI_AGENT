import { NextResponse } from 'next/server';
import { SearchResult } from '@/types';

/**
 * Simple mock data retrieval based on query
 */
function getMockData(query: string): SearchResult {
  // Convert query to lowercase
  const queryLower = query.toLowerCase();
  
  console.log('getMockData called with query:', query);
  console.log('queryLower:', queryLower);
  
  // Determine category based on search query
  let category = 'general';
  
  if (queryLower.includes('database') || queryLower.includes('sql') || queryLower.includes('nosql')) {
    console.log('Returning database results');
    category = 'database';
  } else if (queryLower.includes('mobile') || queryLower.includes('android') || queryLower.includes('ios')) {
    console.log('Returning mobile results');
    category = 'mobile';
  } else if (queryLower.includes('ai') || queryLower.includes('ml') || queryLower.includes('machine learning')) {
    console.log('Returning AI/ML results');
    category = 'ai';
  } else if (queryLower.includes('editor') || queryLower.includes('ide') || queryLower.includes('code')) {
    console.log('Returning code editor results');
    category = 'editor';
  } else if (queryLower.includes('cloud') || queryLower.includes('hosting') || queryLower.includes('deploy')) {
    console.log('Returning cloud platform results');
    category = 'cloud';
  }

  console.log('Returning data category:', category);

  // Mock data for database tools
  if (category === 'database') {
    return {
      companies: [
        {
          name: 'MongoDB',
          website: 'https://www.mongodb.com',
          description: 'MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas.',
          pricing_model: 'Freemium',
          is_open_source: true,
          tech_stack: ['Node.js', 'Python', 'Java'],
          language_support: ['JavaScript', 'Python', 'Java', 'C#', 'Go'],
          integration_capabilities: ['REST API', 'GraphQL', 'Kafka'],
          api_available: true,
          category: 'Database'
        },
        {
          name: 'PostgreSQL',
          website: 'https://www.postgresql.org',
          description: 'PostgreSQL is a powerful, open source object-relational database system with over 30 years of active development that has earned it a strong reputation for reliability, feature robustness, and performance.',
          pricing_model: 'Free',
          is_open_source: true,
          tech_stack: ['C', 'SQL'],
          language_support: ['JavaScript', 'Python', 'Java', 'C#', 'Ruby', 'PHP'],
          integration_capabilities: ['REST API', 'JDBC', 'ODBC'],
          api_available: true,
          category: 'Database'
        },
        {
          name: 'MySQL',
          website: 'https://www.mysql.com',
          description: 'MySQL is an open-source relational database management system. Its name is a combination of "My", the name of co-founder Michael Widenius\'s daughter, and "SQL", the abbreviation for Structured Query Language.',
          pricing_model: 'Freemium',
          is_open_source: true,
          tech_stack: ['C++', 'SQL'],
          language_support: ['JavaScript', 'Python', 'Java', 'PHP', 'Ruby'],
          integration_capabilities: ['REST API', 'JDBC', 'ODBC'],
          api_available: true,
          category: 'Database'
        }
      ],
      analysis: {
        market_trends: 'The database market continues to grow with a focus on scalability and cloud integration. NoSQL databases like MongoDB are gaining popularity for web applications, while PostgreSQL is becoming the preferred choice for complex transactional systems requiring robust SQL support.',
        user_recommendation: 'For modern web applications with flexible schema requirements, MongoDB is recommended. For applications with complex relationships and transactional needs, PostgreSQL offers robust features and reliability.'
      },
      category: 'Database'
    };
  }
  
  // Mock data for mobile development tools
  else if (category === 'mobile') {
    return {
      companies: [
        {
          name: 'React Native',
          website: 'https://reactnative.dev',
          description: 'React Native is an open-source mobile application framework created by Facebook. It is used to develop applications for Android, iOS, Web, and UWP by enabling developers to use React along with native platform capabilities.',
          pricing_model: 'Free',
          is_open_source: true,
          tech_stack: ['JavaScript', 'TypeScript', 'React'],
          language_support: ['JavaScript', 'TypeScript'],
          integration_capabilities: ['Native Modules', 'Third-party Libraries'],
          api_available: true,
          category: 'Mobile'
        },
        {
          name: 'Flutter',
          website: 'https://flutter.dev',
          description: 'Flutter is Google\'s UI toolkit for building beautiful, natively compiled applications for mobile, web, and desktop from a single codebase.',
          pricing_model: 'Free',
          is_open_source: true,
          tech_stack: ['Dart'],
          language_support: ['Dart'],
          integration_capabilities: ['Native APIs', 'Firebase', 'REST APIs'],
          api_available: true,
          category: 'Mobile'
        },
        {
          name: 'Ionic',
          website: 'https://ionicframework.com',
          description: 'Ionic is a complete open-source SDK for hybrid mobile app development created by Max Lynch, Ben Sperry, and Adam Bradley of Drifty Co. in 2013.',
          pricing_model: 'Freemium',
          is_open_source: true,
          tech_stack: ['TypeScript', 'JavaScript', 'Angular', 'React', 'Vue'],
          language_support: ['TypeScript', 'JavaScript'],
          integration_capabilities: ['Cordova', 'Capacitor', 'Angular', 'React', 'Vue'],
          api_available: true,
          category: 'Mobile'
        }
      ],
      analysis: {
        market_trends: 'Mobile development frameworks that enable cross-platform development from a single codebase are increasingly popular. React Native and Flutter are leading the market with strong community support and frequent updates.',
        user_recommendation: 'Flutter offers excellent performance and a rich set of custom widgets for a native-like experience. React Native is ideal for teams already familiar with React and JavaScript ecosystems.'
      },
      category: 'Mobile'
    };
  }
  
  // Mock data for AI/ML tools
  else if (category === 'ai') {
    return {
      companies: [
        {
          name: 'TensorFlow',
          website: 'https://www.tensorflow.org',
          description: 'TensorFlow is a free and open-source software library for machine learning and artificial intelligence. It can be used across a range of tasks but has a particular focus on training and inference of deep neural networks.',
          pricing_model: 'Free',
          is_open_source: true,
          tech_stack: ['Python', 'C++', 'CUDA'],
          language_support: ['Python', 'JavaScript', 'Java', 'C++', 'Go'],
          integration_capabilities: ['Cloud APIs', 'TensorFlow.js', 'TensorFlow Lite'],
          api_available: true,
          category: 'AI/ML'
        },
        {
          name: 'PyTorch',
          website: 'https://pytorch.org',
          description: 'PyTorch is an open-source machine learning library based on the Torch library, used for applications such as computer vision and natural language processing.',
          pricing_model: 'Free',
          is_open_source: true,
          tech_stack: ['Python', 'C++', 'CUDA'],
          language_support: ['Python', 'C++'],
          integration_capabilities: ['ONNX', 'TorchServe', 'Cloud Platforms'],
          api_available: true,
          category: 'AI/ML'
        },
        {
          name: 'Hugging Face',
          website: 'https://huggingface.co',
          description: 'Hugging Face is an AI community and platform that provides tools for building, training and deploying machine learning models based on open source code and technologies.',
          pricing_model: 'Freemium',
          is_open_source: true,
          tech_stack: ['Python', 'PyTorch', 'TensorFlow'],
          language_support: ['Python', 'JavaScript'],
          integration_capabilities: ['Transformers', 'Datasets', 'Accelerate'],
          api_available: true,
          category: 'AI/ML'
        }
      ],
      analysis: {
        market_trends: 'AI and ML tools are becoming more accessible to developers without specialized knowledge. Pre-trained models and transfer learning approaches are reducing the barriers to implementing AI in applications.',
        user_recommendation: 'PyTorch is favored in research for its dynamic computation graph and intuitive design. TensorFlow with Keras is preferred for production deployment and mobile/edge device deployment.'
      },
      category: 'AI/ML'
    };
  }
  
  // Mock data for code editors
  else if (category === 'editor') {
    return {
      companies: [
        {
          name: 'Visual Studio Code',
          website: 'https://code.visualstudio.com',
          description: 'Visual Studio Code is a free source-code editor made by Microsoft for Windows, Linux and macOS. Features include support for debugging, syntax highlighting, intelligent code completion, snippets, code refactoring, and embedded Git.',
          pricing_model: 'Free',
          is_open_source: true,
          tech_stack: ['TypeScript', 'JavaScript', 'Electron'],
          language_support: ['JavaScript', 'TypeScript', 'Python', 'Java', 'C++', 'and many more'],
          integration_capabilities: ['Extensions', 'Git', 'Debugging Tools'],
          api_available: true,
          category: 'Code Editor'
        },
        {
          name: 'JetBrains IDEs',
          website: 'https://www.jetbrains.com',
          description: 'JetBrains provides a suite of development tools including IntelliJ IDEA, PyCharm, WebStorm, and more. These IDEs offer powerful code analysis, integrated developer tools and strong language support.',
          pricing_model: 'Paid',
          is_open_source: false,
          tech_stack: ['Java', 'Kotlin'],
          language_support: ['Java', 'Kotlin', 'Python', 'JavaScript', 'and many more'],
          integration_capabilities: ['Plugins', 'Git', 'Database Tools'],
          api_available: true,
          category: 'Code Editor'
        },
        {
          name: 'Sublime Text',
          website: 'https://www.sublimetext.com',
          description: 'Sublime Text is a sophisticated text editor for code, markup and prose. You\'ll love the slick user interface, extraordinary features and amazing performance.',
          pricing_model: 'Paid',
          is_open_source: false,
          tech_stack: ['C++', 'Python'],
          language_support: ['Multiple languages through syntax packages'],
          integration_capabilities: ['Packages', 'Build Systems'],
          api_available: true,
          category: 'Code Editor'
        }
      ],
      analysis: {
        market_trends: 'Code editors and IDEs are becoming more feature-rich while maintaining performance. Integration with cloud services, containers, and remote development capabilities are increasingly important features.',
        user_recommendation: 'VS Code offers the best balance of performance, features, and extensibility for most developers. For language-specific development, JetBrains IDEs provide deeper integration and specialized tools.'
      },
      category: 'Code Editor'
    };
  }
  
  // Mock data for cloud platforms
  else if (category === 'cloud') {
    return {
      companies: [
        {
          name: 'AWS',
          website: 'https://aws.amazon.com',
          description: 'Amazon Web Services (AWS) is a subsidiary of Amazon providing on-demand cloud computing platforms and APIs to individuals, companies, and governments, on a metered pay-as-you-go basis.',
          pricing_model: 'Paid',
          is_open_source: false,
          tech_stack: ['Multiple languages and technologies'],
          language_support: ['JavaScript', 'Python', 'Java', 'Ruby', 'Go', 'PHP', '.NET'],
          integration_capabilities: ['REST APIs', 'SDKs', 'CLI Tools'],
          api_available: true,
          category: 'Cloud'
        },
        {
          name: 'Microsoft Azure',
          website: 'https://azure.microsoft.com',
          description: 'Microsoft Azure is a cloud computing service created by Microsoft for building, testing, deploying, and managing applications and services through Microsoft-managed data centers.',
          pricing_model: 'Paid',
          is_open_source: false,
          tech_stack: ['Multiple languages and technologies'],
          language_support: ['JavaScript', 'Python', 'Java', '.NET', 'Go', 'Ruby', 'PHP'],
          integration_capabilities: ['REST APIs', 'SDKs', 'CLI Tools'],
          api_available: true,
          category: 'Cloud'
        },
        {
          name: 'Google Cloud Platform',
          website: 'https://cloud.google.com',
          description: 'Google Cloud Platform (GCP) is a suite of cloud computing services that runs on the same infrastructure that Google uses internally for its end-user products.',
          pricing_model: 'Paid',
          is_open_source: false,
          tech_stack: ['Multiple languages and technologies'],
          language_support: ['JavaScript', 'Python', 'Java', 'Go', 'Ruby', 'PHP', '.NET'],
          integration_capabilities: ['REST APIs', 'SDKs', 'CLI Tools'],
          api_available: true,
          category: 'Cloud'
        }
      ],
      analysis: {
        market_trends: 'Cloud computing continues to grow as organizations migrate from on-premises infrastructure. Serverless architectures, containerization, and managed services are becoming the standard for new applications.',
        user_recommendation: 'AWS offers the most mature and comprehensive set of services. Azure provides excellent integration with Microsoft products and services. GCP excels in data analytics and machine learning capabilities.'
      },
      category: 'Cloud'
    };
  }
  
  // Default/general results
  else {
    return {
      companies: [
        {
          name: 'GitHub',
          website: 'https://github.com',
          description: 'GitHub is a provider of Internet hosting for software development and version control using Git. It offers the distributed version control and source code management functionality of Git, plus its own features.',
          pricing_model: 'Freemium',
          is_open_source: false,
          tech_stack: ['Ruby', 'Go', 'JavaScript'],
          language_support: ['All major programming languages'],
          integration_capabilities: ['GitHub API', 'Webhooks', 'GitHub Actions'],
          api_available: true,
          category: 'Development'
        },
        {
          name: 'Stack Overflow',
          website: 'https://stackoverflow.com',
          description: 'Stack Overflow is a question and answer website for professional and enthusiast programmers. It is the flagship site of the Stack Exchange Network.',
          pricing_model: 'Freemium',
          is_open_source: false,
          tech_stack: ['.NET', 'C#', 'SQL'],
          language_support: ['N/A'],
          integration_capabilities: ['Stack Exchange API'],
          api_available: true,
          category: 'Community'
        },
        {
          name: 'Docker',
          website: 'https://www.docker.com',
          description: 'Docker is a set of platform as a service products that use OS-level virtualization to deliver software in packages called containers.',
          pricing_model: 'Freemium',
          is_open_source: true,
          tech_stack: ['Go'],
          language_support: ['Any language via containers'],
          integration_capabilities: ['Docker Hub', 'Docker Compose', 'Kubernetes'],
          api_available: true,
          category: 'DevOps'
        }
      ],
      analysis: {
        market_trends: 'Developer tools are becoming more integrated and collaborative. Cloud-based development environments, container technologies, and AI-assisted coding are transforming how software is built.',
        user_recommendation: 'Invest in tools that improve collaboration and automate repetitive tasks. Container technologies like Docker are essential for consistent development and deployment experiences.'
      },
      category: 'General'
    };
  }
}

/**
 * API route handler for developer tool searches
 */
export async function POST(request: Request) {
  try {
    console.log('Search API received raw request body:', await request.clone().json());
    const { query } = await request.json();
    console.log('Extracted query:', query);

    if (!query) {
      return NextResponse.json(
        { error: 'Query parameter is required' },
        { status: 400 }
      );
    }

    // Get data based on query
    const data = getMockData(query);
    console.log('Returning data category:', data.category);
    
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error in search API:', error);
    return NextResponse.json(
      { error: 'Failed to process search request' },
      { status: 500 }
    );
  }
} 