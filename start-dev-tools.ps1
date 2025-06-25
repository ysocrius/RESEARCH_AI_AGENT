# Master launcher script for Developer Tools UI
# This script starts the Next.js server with options for development or production mode

param (
    [string]$Mode = "dev",  # Default mode is development
    [switch]$Help = $false
)

# Show help information
if ($Help) {
    Write-Host "Usage: .\start-dev-tools.ps1 [-Mode <mode>] [-Help]" -ForegroundColor Cyan
    Write-Host ""
    Write-Host "Options:" -ForegroundColor Yellow
    Write-Host "  -Mode <mode>    Specifies the run mode: 'dev' (development) or 'prod' (production). Default is 'dev'."
    Write-Host "  -Help           Shows this help message."
    Write-Host ""
    Write-Host "Examples:" -ForegroundColor Green
    Write-Host "  .\start-dev-tools.ps1              # Runs in development mode"
    Write-Host "  .\start-dev-tools.ps1 -Mode dev    # Runs in development mode"
    Write-Host "  .\start-dev-tools.ps1 -Mode prod   # Runs in production mode"
    exit
}

# Add Node.js to PATH if not already there
if (-not (Get-Command node -ErrorAction SilentlyContinue)) {
    $nodejsPath = "C:\Program Files\nodejs"
    if (Test-Path "$nodejsPath\node.exe") {
        $env:PATH = $env:PATH + ";$nodejsPath"
        Write-Host "Added Node.js to PATH for this session" -ForegroundColor Green
    } else {
        Write-Host "Node.js not found. Please install Node.js from https://nodejs.org/" -ForegroundColor Red
        exit 1
    }
}

Write-Host "=== Developer Tools Research Agent ===" -ForegroundColor Cyan

# Get the current script directory
$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Definition

# Change to the project directory
Set-Location -Path "$scriptDir\dev-tools-ui"
Write-Host "Changed to directory: $(Get-Location)" -ForegroundColor Gray

# Run the server based on specified mode
if ($Mode -eq "prod") {
    Write-Host "Starting Next.js production server..." -ForegroundColor Yellow
    
    # Check if build exists, if not build the project
    if (-not (Test-Path ".next")) {
        Write-Host "Production build not found. Building the project first..." -ForegroundColor Magenta
        npm run build
        
        # Check if build was successful
        if ($LASTEXITCODE -ne 0) {
            Write-Host "Build failed. Please fix the errors and try again." -ForegroundColor Red
            exit 1
        }
    }
    
    # Run production server
    npm run start
} else {
    Write-Host "Starting Next.js development server..." -ForegroundColor Yellow
    npm run dev
} 