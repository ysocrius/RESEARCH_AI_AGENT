# PowerShell script to start Next.js development server
# This script is designed to be run from the WEB_AGENT directory

Write-Host "=== Developer Tools Research Agent UI ===" -ForegroundColor Cyan
Write-Host "Starting Next.js development server..." -ForegroundColor Yellow

# Get the current script directory
$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Definition

# Navigate to the dev-tools-ui directory 
Set-Location $scriptDir
Write-Host "Working directory: $(Get-Location)" -ForegroundColor Gray

# Run the development server
Write-Host "Starting Next.js development server..." -ForegroundColor Green
npm run dev 