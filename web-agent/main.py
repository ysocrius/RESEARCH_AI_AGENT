from dotenv import load_dotenv
from src.workflow import Workflow

load_dotenv()

def print_company_results(company, index):
    print(f"\n{index}. {company.name}")
    print(f"   Website: {company.website}")
    print(f"   Pricing: {company.pricing_model}")
    print(f"   Open Source: {company.is_open_source}")

    if company.tech_stack:
        print(f"   Tech Stack: {', '.join(company.tech_stack[:5])}")

    if company.language_support:
        print(
            f"   Language Support: {', '.join(company.language_support[:5])}"
        )

    if company.api_available is not None:
        api_status = (
            "Available" if company.api_available else "Not Available"
        )
        print(f"   API: {api_status}")

    if company.integration_capabilities:
        print(
            f"   Integrations: {', '.join(company.integration_capabilities[:4])}"
        )

    if company.description and company.description != "Analysis failed":
        print(f"   Description: {company.description}")
    print()

def print_analysis(analysis):
    print("Developer Recommendations: ")
    print("-" * 40)
    print(analysis)

def run_agent_loop(workflow):
    print("Developer Tools Research Agent")
    while True:
        query = input("\nDeveloper Tools Query: ").strip()
        if query.lower() in {"quit", "exit"}:
            break
        if query:
            result = workflow.run(query)
            print(f"\nResults for: {query}")
            print("=" * 60)
            for i, company in enumerate(result.companies, 1):
                print_company_results(company, i)
            if result.analysis:
                print_analysis(result.analysis)

def main():
    workflow = Workflow()
    run_agent_loop(workflow)

if __name__ == "__main__":
    main()
