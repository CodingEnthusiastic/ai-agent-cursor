"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import {
  Github,
  Twitter,
  Linkedin,
  Play,
  Download,
  Eye,
  Code,
  Sparkles,
  Zap,
  ArrowRight,
  CheckCircle,
  Terminal,
  FileText,
} from "lucide-react"
import { toast } from "@/hooks/use-toast"

interface AnimatedCounterProps {
  end: number
  duration?: number
  suffix?: string
  prefix?: string
}

function AnimatedCounter({ end, duration = 2000, suffix = "", prefix = "" }: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [isVisible])

  useEffect(() => {
    if (!isVisible) return

    let startTime: number
    let animationFrame: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const currentCount = Math.floor(easeOutQuart * end)

      setCount(currentCount)

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [isVisible, end, duration])

  return (
    <span ref={ref} className="font-bold">
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  )
}

interface GeneratedFile {
  name: string
  content: string
  type: "html" | "css" | "js"
}

interface TerminalStep {
  id: string
  title: string
  description: string
  command: string
  status: "pending" | "running" | "completed"
}

export default function RishabhsCursor() {
  const [projectDescription, setProjectDescription] = useState("")
  const [isBuilding, setIsBuilding] = useState(false)
  const [buildingStep, setBuildingStep] = useState("")
  const [showTerminal, setShowTerminal] = useState(false)
  const [terminalSteps, setTerminalSteps] = useState<TerminalStep[]>([])
  const [generatedFiles, setGeneratedFiles] = useState<GeneratedFile[]>([])
  const [activeTab, setActiveTab] = useState<"generation" | "preview">("generation")
  const [showPreview, setShowPreview] = useState(false)
  const previewRef = useRef<HTMLIFrameElement>(null)

  const stats = [
    { value: 3084, label: "Projects Created", suffix: "+" },
    { value: 1107, label: "Active Users", suffix: "+" },
    { value: 99.2, label: "Success Rate", suffix: "%" },
    { value: 10000, label: "Visitors Today", suffix: "" },
  ]

  const detailedStats = [
    {
      icon: "👥",
      value: 1020,
      label: "Active Users",
      description: "Developers using Cursor daily",
      change: "+12%",
      positive: true,
    },
    {
      icon: "💻",
      value: 2763,
      label: "Websites Built",
      description: "Successful projects completed",
      change: "+25%",
      positive: true,
    },
    {
      icon: "⏱️",
      value: 2.8,
      label: "Avg. Build Time",
      description: "Time to complete projects",
      change: "-15%",
      positive: true,
      suffix: " min",
    },
    {
      icon: "✅",
      value: 99.2,
      label: "Success Rate",
      description: "Projects built successfully",
      change: "+2%",
      positive: true,
      suffix: "%",
    },
    {
      icon: "👁️",
      value: 6874,
      label: "Total Visitors",
      description: "People who discovered Cursor",
      change: "+8%",
      positive: true,
    },
    {
      icon: "📈",
      value: 340,
      label: "Growth Rate",
      description: "Month over month growth",
      change: "+45%",
      positive: true,
      suffix: "%",
    },
  ]

  const startBuilding = async () => {
    if (!projectDescription.trim()) {
      toast({
        title: "Description Required",
        description: "Please describe what you want to build.",
        variant: "destructive",
      })
      return
    }

    setIsBuilding(true)
    setBuildingStep("Building...")
    setShowTerminal(true)
    setActiveTab("generation")

    // Simulate terminal steps
    const steps: TerminalStep[] = [
      {
        id: "1",
        title: "Initialize Project",
        description: "Creating project directory",
        command: `mkdir ${projectDescription.toLowerCase().replace(/\s+/g, "-")}`,
        status: "pending",
      },
      {
        id: "2",
        title: "Create HTML File",
        description: "Creating HTML structure file",
        command: `touch ${projectDescription.toLowerCase().replace(/\s+/g, "-")}/index.html`,
        status: "pending",
      },
      {
        id: "3",
        title: "Create JavaScript File",
        description: "Creating JavaScript logic file",
        command: `touch ${projectDescription.toLowerCase().replace(/\s+/g, "-")}/script.js`,
        status: "pending",
      },
      {
        id: "4",
        title: "Generate HTML Content",
        description: "Writing HTML structure and content",
        command: `cat << 'EOF' > ${projectDescription.toLowerCase().replace(/\s+/g, "-")}/index.html`,
        status: "pending",
      },
      {
        id: "5",
        title: "Generate CSS Styles",
        description: "Writing CSS styles and animations",
        command: `cat << 'EOF' > ${projectDescription.toLowerCase().replace(/\s+/g, "-")}/style.css`,
        status: "pending",
      },
    ]

    setTerminalSteps(steps)

    // Execute steps with delays
    for (let i = 0; i < steps.length; i++) {
      await new Promise((resolve) => setTimeout(resolve, 1000))

      setTerminalSteps((prev) => prev.map((step, index) => (index === i ? { ...step, status: "running" } : step)))

      await new Promise((resolve) => setTimeout(resolve, 1500))

      setTerminalSteps((prev) => prev.map((step, index) => (index === i ? { ...step, status: "completed" } : step)))
    }

    // Generate files based on description (AI simulation happens here)
    const files = generateWebsiteFiles(projectDescription)
    setGeneratedFiles(files)

    // Update preview
    updatePreview(files)

    setIsBuilding(false)
    setBuildingStep("")
    setShowPreview(true)

    toast({
      title: "Website Generated!",
      description: "Your website is ready. Check the preview and download the files.",
    })
  }

  // AI SIMULATION: This function simulates AI code generation
  // In a real implementation, this would call an AI API like OpenAI, Gemini, or Claude
  const generateWebsiteFiles = (description: string): GeneratedFile[] => {
    const lowerDesc = description.toLowerCase()

    if (lowerDesc.includes("calculator")) {
      return [
        {
          name: "index.html",
          type: "html",
          content: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculator</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Arial', sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            padding: 20px;
        }

        .calculator {
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            border-radius: 20px;
            padding: 30px;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
            border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .display {
            margin-bottom: 20px;
        }

        .display input {
            width: 100%;
            height: 80px;
            font-size: 2rem;
            text-align: right;
            padding: 0 20px;
            border: none;
            border-radius: 10px;
            background: rgba(255, 255, 255, 0.9);
            color: #333;
            box-shadow: inset 0 2px 10px rgba(0, 0, 0, 0.1);
        }

        .buttons {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 15px;
        }

        .btn {
            height: 70px;
            border: none;
            border-radius: 15px;
            font-size: 1.2rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.2s ease;
            background: rgba(255, 255, 255, 0.2);
            color: white;
            border: 1px solid rgba(255, 255, 255, 0.3);
        }

        .btn:hover {
            background: rgba(255, 255, 255, 0.3);
            transform: translateY(-2px);
        }

        .btn:active {
            transform: translateY(0);
        }

        .btn.operator {
            background: rgba(255, 107, 107, 0.8);
        }

        .btn.operator:hover {
            background: rgba(255, 107, 107, 1);
        }

        .btn.equals {
            background: rgba(72, 187, 120, 0.8);
            grid-row: span 2;
        }

        .btn.equals:hover {
            background: rgba(72, 187, 120, 1);
        }

        .btn.clear {
            background: rgba(237, 137, 54, 0.8);
        }

        .btn.clear:hover {
            background: rgba(237, 137, 54, 1);
        }

        .btn.zero {
            grid-column: span 2;
        }
    </style>
</head>
<body>
    <div class="calculator">
        <div class="display">
            <input type="text" id="display" readonly>
        </div>
        <div class="buttons">
            <button onclick="clearDisplay()" class="btn clear">C</button>
            <button onclick="deleteLast()" class="btn">←</button>
            <button onclick="appendToDisplay('/')" class="btn operator">/</button>
            <button onclick="appendToDisplay('*')" class="btn operator">*</button>
            
            <button onclick="appendToDisplay('7')" class="btn">7</button>
            <button onclick="appendToDisplay('8')" class="btn">8</button>
            <button onclick="appendToDisplay('9')" class="btn">9</button>
            <button onclick="appendToDisplay('-')" class="btn operator">-</button>
            
            <button onclick="appendToDisplay('4')" class="btn">4</button>
            <button onclick="appendToDisplay('5')" class="btn">5</button>
            <button onclick="appendToDisplay('6')" class="btn">6</button>
            <button onclick="appendToDisplay('+')" class="btn operator">+</button>
            
            <button onclick="appendToDisplay('1')" class="btn">1</button>
            <button onclick="appendToDisplay('2')" class="btn">2</button>
            <button onclick="appendToDisplay('3')" class="btn">3</button>
            <button onclick="calculate()" class="btn equals" rowspan="2">=</button>
            
            <button onclick="appendToDisplay('0')" class="btn zero">0</button>
            <button onclick="appendToDisplay('.')" class="btn">.</button>
        </div>
    </div>
    <script>
        let display = document.getElementById('display');
        let currentInput = '';
        let operator = '';
        let previousInput = '';

        function appendToDisplay(value) {
            if (display.value === '0' && value !== '.') {
                display.value = value;
            } else {
                display.value += value;
            }
        }

        function clearDisplay() {
            display.value = '';
            currentInput = '';
            operator = '';
            previousInput = '';
        }

        function deleteLast() {
            display.value = display.value.slice(0, -1);
        }

        function calculate() {
            try {
                let result = eval(display.value);
                display.value = result;
            } catch (error) {
                display.value = 'Error';
                setTimeout(clearDisplay, 1500);
            }
        }

        // Keyboard support
        document.addEventListener('keydown', function(event) {
            const key = event.key;
            
            if (key >= '0' && key <= '9' || key === '.') {
                appendToDisplay(key);
            } else if (key === '+' || key === '-' || key === '*' || key === '/') {
                appendToDisplay(key);
            } else if (key === 'Enter' || key === '=') {
                calculate();
            } else if (key === 'Escape' || key === 'c' || key === 'C') {
                clearDisplay();
            } else if (key === 'Backspace') {
                deleteLast();
            }
        });
    </script>
</body>
</html>`,
        },
        {
          name: "style.css",
          type: "css",
          content: `/* Dummy styles generated */
body {
  background-color: #f0f0f0;
}
h1 {
  color: #333;
  font-size: 2rem;
}
`
,
        },
        {
          name: "script.js",
          type: "js",
          content: `// Dummy script
console.log("Custom script.js loaded successfully!");
document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM ready.");
});
`

        },
      ]
    }

    // Default website for other descriptions
    return [
      {
        name: "index.html",
        type: "html",
        content: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${description}</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Arial', sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            min-height: 100vh;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
        }

        .header {
            text-align: center;
            padding: 4rem 0;
        }

        .header h1 {
            font-size: 3rem;
            margin-bottom: 1rem;
        }

        .header p {
            font-size: 1.2rem;
            opacity: 0.8;
        }

        .main {
            padding: 2rem 0;
        }

        .hero {
            text-align: center;
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            border-radius: 20px;
            padding: 3rem;
            border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .hero h2 {
            font-size: 2.5rem;
            margin-bottom: 1rem;
        }

        .hero p {
            font-size: 1.1rem;
            margin-bottom: 2rem;
            opacity: 0.9;
        }

        .cta-btn {
            background: rgba(255, 255, 255, 0.2);
            color: white;
            border: 2px solid white;
            padding: 1rem 2rem;
            font-size: 1.1rem;
            border-radius: 50px;
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .cta-btn:hover {
            background: white;
            color: #667eea;
            transform: translateY(-2px);
        }
    </style>
</head>
<body>
    <div class="container">
        <header class="header">
            <h1>${description}</h1>
            <p>Generated with Rishabh's Cursor</p>
        </header>
        <main class="main">
            <section class="hero">
                <h2>Welcome</h2>
                <p>This website was generated based on: "${description}"</p>
                <button onclick="showAlert()" class="cta-btn">Get Started</button>
            </section>
        </main>
    </div>
    <script>
        function showAlert() {
            alert('Hello! This website was generated by Rishabh\\'s Cursor AI.');
        }

        document.addEventListener('DOMContentLoaded', function() {
            console.log('Website generated successfully!');
            
            // Add some interactive animations
            const hero = document.querySelector('.hero');
            if (hero) {
                hero.style.opacity = '0';
                hero.style.transform = 'translateY(30px)';
                hero.style.transition = 'all 0.6s ease';
                
                setTimeout(() => {
                    hero.style.opacity = '1';
                    hero.style.transform = 'translateY(0)';
                }, 300);
            }
        });
    </script>
</body>
</html>`,
      },
      {
        name: "style.css",
        type: "css",
        content: `/* This CSS is already included in the HTML file above */`,
      },
      {
        name: "script.js",
        type: "js",
        content: `/* This JavaScript is already included in the HTML file above */`,
      },
    ]
  }

  const updatePreview = (files: GeneratedFile[]) => {
    const htmlFile = files.find((f) => f.type === "html")

    if (htmlFile && previewRef.current) {
      // Create a blob URL for the HTML content
      const blob = new Blob([htmlFile.content], { type: "text/html" })
      const url = URL.createObjectURL(blob)
      previewRef.current.src = url

      // Clean up the blob URL after a delay
      setTimeout(() => URL.revokeObjectURL(url), 1000)
    }
  }

  // Function to create and download ZIP file containing all project files
  const downloadProject = async () => {
    if (generatedFiles.length === 0) {
      toast({
        title: "No Files to Download",
        description: "Generate a website first to download files.",
        variant: "destructive",
      })
      return
    }

    try {
      // Create ZIP file content manually (simple implementation)
      const projectName = projectDescription.toLowerCase().replace(/\s+/g, "-") || "website-project"

      // For now, we'll download files separately but we can implement JSZip later
      // Creating a simple zip-like experience by downloading all files
      for (const file of generatedFiles) {
        const blob = new Blob([file.content], { type: "text/plain" })
        const url = URL.createObjectURL(blob)
        const a = document.createElement("a")
        a.href = url
        a.download = file.name
        document.body.appendChild(a)
        a.click()
        document.body.removeChild(a)
        URL.revokeObjectURL(url)

        // Small delay between downloads
        await new Promise((resolve) => setTimeout(resolve, 100))
      }

      toast({
        title: "Project Downloaded!",
        description: `All ${generatedFiles.length} files have been downloaded to your computer.`,
      })
    } catch (error) {
      toast({
        title: "Download Failed",
        description: "There was an error downloading the files.",
        variant: "destructive",
      })
    }
  }

  // Function to scroll to live preview section
  const scrollToPreview = () => {
    setActiveTab("preview")
    const previewSection = document.getElementById("live-preview")
    if (previewSection) {
      previewSection.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900">
      {/* Navigation */}
      <nav className="flex items-center justify-between p-6">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">RS</span>
          </div>
          <span className="text-white text-xl font-bold">Rishabh's Cursor</span>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          {/* Navigation Links - Click to scroll to different sections */}
          <a href="#" className="text-white/80 hover:text-white transition-colors">
            Home
          </a>
          <a href="#" className="text-white/80 hover:text-white transition-colors">
            Features
          </a>
          <a href="#" className="text-white/80 hover:text-white transition-colors">
            Demo
          </a>
          <a href="#builder" className="text-white/80 hover:text-white transition-colors">
            Builder
          </a>
          <a href="#" className="text-white/80 hover:text-white transition-colors">
            About
          </a>
          <a href="#" className="text-white/80 hover:text-white transition-colors">
            Contact
          </a>
        </div>

        <div className="flex items-center space-x-4">
          {/* Social Media Links - Connect with the developer */}
          <Github className="w-5 h-5 text-white/80 hover:text-white cursor-pointer transition-colors" />
          <Twitter className="w-5 h-5 text-white/80 hover:text-white cursor-pointer transition-colors" />
          <Linkedin className="w-5 h-5 text-white/80 hover:text-white cursor-pointer transition-colors" />
          {/* Try Now Button - Start using the AI website builder */}
          <Button
            className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600"
            onClick={() => document.getElementById("builder")?.scrollIntoView({ behavior: "smooth" })}
          >
            Try Now
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="container mx-auto px-6 py-12">
        <div className="text-center mb-16">
          <Badge className="mb-6 bg-purple-500/20 text-purple-200 border-purple-500/30">
            <Sparkles className="w-4 h-4 mr-2" />
            Powered by Google's Gemini AI
          </Badge>

          <h1 className="text-6xl font-bold text-white mb-6">
            Meet{" "}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Rishabh's Cursor
            </span>
          </h1>

          <p className="text-xl text-white/80 max-w-4xl mx-auto mb-8">
            An intelligent AI agent that builds complete, functional frontend websites through automated terminal
            commands. Experience the future of web development.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Badge variant="outline" className="border-yellow-500/50 text-yellow-300 bg-yellow-500/10">
              <Zap className="w-4 h-4 mr-2" />
              Real-time Building
            </Badge>
            <Badge variant="outline" className="border-green-500/50 text-green-300 bg-green-500/10">
              <Code className="w-4 h-4 mr-2" />
              Live Code Generation
            </Badge>
            <Badge variant="outline" className="border-blue-500/50 text-blue-300 bg-blue-500/10">
              <Eye className="w-4 h-4 mr-2" />
              Instant Preview
            </Badge>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {/* Start Building Button - Begin creating your website with AI */}
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600"
              onClick={() => document.getElementById("builder")?.scrollIntoView({ behavior: "smooth" })}
            >
              Start Building Now <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            {/* Watch Demo Button - See how the AI website builder works */}
            <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 bg-transparent">
              Watch Demo
            </Button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-white mb-2">
                <AnimatedCounter end={stat.value} suffix={stat.suffix} duration={2000 + index * 200} />
              </div>
              <div className="text-white/60 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Trusted by Developers Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Trusted by Developers Worldwide</h2>
          <p className="text-xl text-white/80 mb-12">
            Join thousands of developers who are building faster with Rishabh's Cursor
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {detailedStats.map((stat, index) => (
              <Card
                key={index}
                className="bg-white/5 backdrop-blur-sm border-white/10 p-6 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="text-2xl">{stat.icon}</div>
                  <div className={`text-sm font-medium ${stat.positive ? "text-green-400" : "text-red-400"}`}>
                    {stat.change}
                  </div>
                </div>
                <div className="text-3xl font-bold text-white mb-2">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix || ""} duration={2500 + index * 300} />
                </div>
                <div className="text-white font-medium mb-1">{stat.label}</div>
                <div className="text-white/60 text-sm">{stat.description}</div>
              </Card>
            ))}
          </div>
        </div>

        {/* Builder Section */}
        <div id="builder" className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-white mb-4">Build Your Website Live</h2>
            <p className="text-xl text-white/80">
              Watch Rishabh's Cursor build your website in real-time using Gemini AI with live terminal commands
            </p>
          </div>

          {/* Project Description */}
          <Card className="bg-white/5 backdrop-blur-sm border-white/10 p-6 mb-6">
            <div className="flex items-center mb-4">
              <Code className="w-5 h-5 text-white mr-2" />
              <h3 className="text-white text-lg font-semibold">Project Description</h3>
            </div>
            <Textarea
              placeholder="Describe your website (e.g., 'Build a calculator app with dark theme')"
              value={projectDescription}
              onChange={(e) => setProjectDescription(e.target.value)}
              className="bg-white/10 border-white/20 text-white placeholder:text-white/50 min-h-[100px] mb-4"
            />
            {/* Start Building Button - AI will generate your website based on description */}
            <Button
              onClick={startBuilding}
              disabled={isBuilding}
              className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 h-12"
            >
              {isBuilding ? (
                <>
                  <div className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full mr-2"></div>
                  {buildingStep}
                </>
              ) : (
                <>
                  <Play className="w-4 h-4 mr-2" />
                  Start Building
                </>
              )}
            </Button>
          </Card>

          {/* Tabs */}
          {showTerminal && (
            <div className="grid grid-cols-2 gap-4 mb-6">
              {/* Code Generation Tab - View the AI terminal commands and file generation */}
              <Button
                variant={activeTab === "generation" ? "default" : "outline"}
                onClick={() => setActiveTab("generation")}
                className={
                  activeTab === "generation"
                    ? "bg-gradient-to-r from-purple-500 to-blue-500"
                    : "border-white/30 text-white hover:bg-white/10"
                }
              >
                <Code className="w-4 h-4 mr-2" />
                Code Generation
              </Button>
              {/* Live Preview Tab - See your generated website in action */}
              <Button
                variant={activeTab === "preview" ? "default" : "outline"}
                onClick={scrollToPreview}
                className={
                   activeTab === "preview"
      ? "bg-black text-white"
      : "border-white/30 text-white hover:bg-white/10"
                }
              >
                <Eye className="w-4 h-4 mr-2" />
                Live Preview
              </Button>
            </div>
          )}

          {/* Content Area */}
          {showTerminal && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Terminal Commands */}
              <Card className="bg-white/5 backdrop-blur-sm border-white/10 p-6">
                <div className="flex items-center mb-4">
                  <Terminal className="w-5 h-5 text-white mr-2" />
                  <h3 className="text-white text-lg font-semibold">Live Terminal Commands</h3>
                </div>
                <div className="space-y-4 max-h-96 overflow-y-auto">
                  {terminalSteps.map((step) => (
                    <div key={step.id} className="border border-white/10 rounded-lg p-4">
                      <div className="flex items-center mb-2">
                        {step.status === "completed" && <CheckCircle className="w-5 h-5 text-green-400 mr-2" />}
                        {step.status === "running" && (
                          <div className="animate-spin w-4 h-4 border-2 border-blue-400 border-t-transparent rounded-full mr-2"></div>
                        )}
                        {step.status === "pending" && (
                          <div className="w-5 h-5 border border-white/30 rounded-full mr-2"></div>
                        )}
                        <h4 className="text-white font-medium">{step.title}</h4>
                      </div>
                      <p className="text-white/60 text-sm mb-2">{step.description}</p>
                      <code className="text-green-400 text-sm bg-black/30 p-2 rounded block">$ {step.command}</code>
                      {step.status === "completed" && (
                        <p className="text-green-400 text-sm mt-2">✅ Command executed successfully</p>
                      )}
                    </div>
                  ))}
                </div>
              </Card>

              {/* Generated Files */}
              <Card className="bg-white/5 backdrop-blur-sm border-white/10 p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <FileText className="w-5 h-5 text-white mr-2" />
                    <h3 className="text-white text-lg font-semibold">Generated Files</h3>
                  </div>
                  {generatedFiles.length > 0 && (
                    /* Download Project Button - Download all generated files to your computer */
                    <Button onClick={downloadProject} size="sm" className="bg-green-600 hover:bg-green-700">
                      <Download className="w-4 h-4 mr-2" />
                      Download Project
                    </Button>
                  )}
                </div>

                {generatedFiles.length > 0 ? (
                  <div className="space-y-4 max-h-96 overflow-y-auto">
                    {generatedFiles.map((file, index) => (
                      <div key={index} className="border border-white/10 rounded-lg">
                        <div className="flex items-center justify-between p-3 border-b border-white/10">
                          <span className="text-white font-medium">{file.name}</span>
                          <Badge variant="outline" className="border-white/30 text-white/70">
                            {file.type.toUpperCase()}
                          </Badge>
                        </div>
                        <pre className="p-3 text-xs text-white/80 overflow-x-auto max-h-32">
                          <code>{file.content.substring(0, 200)}...</code>
                        </pre>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12 text-white/60">
                    <FileText className="w-12 h-12 mx-auto mb-4 opacity-50" />
                    <p>Generated files will appear here</p>
                  </div>
                )}
              </Card>
            </div>
          )}

          {/* Live Preview */}
          {showPreview && (
            <Card id="live-preview" className="bg-white/5 backdrop-blur-sm border-white/10 p-6 mt-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <Eye className="w-5 h-5 text-white mr-2" />
                  <h3 className="text-white text-lg font-semibold">Live Website Preview</h3>
                </div>
                {/* Download Project Button - Save all website files to your computer */}
                <Button onClick={downloadProject} className="bg-green-600 hover:bg-green-700">
                  <Download className="w-4 h-4 mr-2" />
                  Download Project
                </Button>
              </div>
              <div className="bg-white rounded-lg overflow-hidden" style={{ height: "500px" }}>
                <iframe
  className="w-full h-full border-0"
  title="Website Preview"
  sandbox="allow-scripts allow-same-origin"
  srcDoc={generatedFiles.find((f) => f.type === "html")?.content || ""}
/>

              </div>
            </Card>
          )}
        </div>

        {/* Footer */}
        <footer className="border-t border-white/10 pt-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">RS</span>
                </div>
                <span className="text-white text-lg font-bold">Rishabh's Cursor</span>
              </div>
              <p className="text-white/60 mb-4">
                Revolutionizing frontend development with AI-powered automation. Build websites faster than ever before.
              </p>
              <div className="flex space-x-4">
                {/* Social Media Links - Follow for updates and connect */}
                <Github className="w-5 h-5 text-white/60 hover:text-white cursor-pointer transition-colors" />
                <Twitter className="w-5 h-5 text-white/60 hover:text-white cursor-pointer transition-colors" />
                <Linkedin className="w-5 h-5 text-white/60 hover:text-white cursor-pointer transition-colors" />
              </div>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <a href="#" className="block text-white/60 hover:text-white transition-colors">
                  Home
                </a>
                <a href="#" className="block text-white/60 hover:text-white transition-colors">
                  Features
                </a>
                <a href="#" className="block text-white/60 hover:text-white transition-colors">
                  Demo
                </a>
                <a href="#" className="block text-white/60 hover:text-white transition-colors">
                  About
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Support</h4>
              <div className="space-y-2">
                <a href="#" className="block text-white/60 hover:text-white transition-colors">
                  Documentation
                </a>
                <a href="#" className="block text-white/60 hover:text-white transition-colors">
                  API Reference
                </a>
                <a href="#" className="block text-white/60 hover:text-white transition-colors">
                  Community
                </a>
                <a href="#" className="block text-white/60 hover:text-white transition-colors">
                  Contact Us
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 text-sm">© 2024 Rishabh Shenoy. All rights reserved.</p>
            <p className="text-white/60 text-sm">Made with ❤️ using React & Tailwind CSS</p>
          </div>
        </footer>
      </div>
    </div>
  )
}
