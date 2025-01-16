import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import "./PracticeSeparate.css"
import TRANSACTIONADVISORY from "./TRANSACTION-ADVISORY.jpeg"
const PracticesSeparate = () => {
    const { practiceName } = useParams();

    // Define the dynamic content for each practice
    const practiceContent = {
        "india-strategy-doing-business-india": (
            <>
                <div className="PracticeImageContainer">
                    <h2>INDIA STRATEGY- DOING BUSINESS IN INDIA</h2>

                    <img src={TRANSACTIONADVISORY} alt="" />
                </div>
                <p>
                    <b>Doing Business in Ahmedabad, Sanand, Baroda</b>
                </p>
                <p>India is changing fast and is the fastest growing trillion dollar economy in the world. With the aspirational aim of being a 5 trillion dollar economy by 2025 the regulatory and economic environment has opened up, there are new opportunities and new challenges being faced by companies looking to expand into India.</p>
                <p>At M. S. Chhajed we have helped our international clients spread across 5 continents to successfully execute their India strategy and continue to maintain strong relationships with them. We help companies in setting up a business in India as well as Doing Business in Gujarat with company registration and with other steps required before starting a business in India. Apart from charting out their India strategy, we have consistently added value with our knowledge of common pitfalls for overseas companies, complications that may arise for foreign directors and a deeper understanding of the regulations for domestic and international companies. Our simplified regulatory guide to guide to doing business in India can also be referred to.</p>
                <br />
                <p>Our comprehensive range of services includes:</p>
                <ul>
                    <li>Determining the apt entry options in India i.e. Company, LLP, Branch Office or Liaison Office Structuring an entity</li>
                    <li>Company formation, registration and government approvals</li>
                    <li>Compliance with regulations relating to foreign exchange</li>
                    <li>
                        Drafting company charter / memorandum and articles of association</li>
                    <li>Registration with multiple direct and indirect tax authorities</li>
                    <li>Other registrations required for employers, for manufacturers, for service providers, etc.
                    </li>
                    <li>Provident fund / pension registrations, ESIC, Shops & Establishments Act registrations, etc.
                    </li>
                    <li>Partner identification
                    </li>
                    <li>Commercial assistance, negotiation and discussions
                    </li>
                    <li>Due diligence and valuation of potential acquisition targets
                    </li>
                    <li>Tax planning and scenario analysis
                    </li>
                    <li>Ongoing accounting and payroll support
                    </li>
                </ul>
            </>
        ),
        "start-up-services": (
            <>
                <div className="PracticeImageContainer">
                    <h2>START UP SERVICES</h2>
                    <img src="https://images.unsplash.com/photo-1531973576160-7125cd663d86?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </div>
                <p>
                    The businesses worldwide are changing rapidly, together with dynamic laws, regulations and economic environment. Extensive disclosures requiring detailed analysis of the Financial Statements are mandated under various statues which in turn places significant importance of independent statutory audits. Finan-cial statements are the ultimate report card of a company’s fiscal performance. They enable owners and managers to pursue their business objectives, whether they are raising capital, acquisition, divestiture or restructure. Further meeting investor expectations begins with the completeness, accuracy and fair presentation of information in your financial statements and disclosures. The audit is key to sustaining confidence in both your company and the financial system at large. It must keep pace with a fast-evolving corporate reporting environment – one characterised by investor scepticism and the 24/7 scrutiny of cor-porate information, including non-financial information. Auditing thus involves much more than just the legal obligation of certifying annual accounts.
                </p>
                <p>At M. S. Chhajed, we have long standing track record of such indisputable assurance provided to our es-teemed clients on various matters. Our belief that audit and assurance services are a ‘profit centre’ rather than a ‘cost centre’ have also been endorsed by our clients; the testimony of which lies in our decades long association with them. We deliver tailor-made assurance services accentuated by impeccable quality to our clients in local and global marketplace. Our focus is on assisting our clients in steering through com-plex professional requirements with clarity and agility. Our focused approach helps in navigating complex-ities to provide insights in your business with customised solutions.</p>
                <br />
                <p>Our assurance team has considerable experience and expertise in providing:</p>
                <ul>
                    <li>Audit of financial statements prepared in accordance with various GAAP’s (Ind-GAAP /IND-AS/ IFRS) under various auditing standards.</li>
                    <li>Review of the finical statements in accordance with various GAAP’s (Ind-GAAP /IND-AS/ IFRS) under various auditing standards</li>
                    <li>Internal Audit and Pre-Audit</li>
                    <li>Management Audi</li>
                    <li>Due Diligence</li>
                    <li>Forensic Audit</li>
                    <li>Stock Audit</li>
                    <li>Secretarial and other Company Law Compliance Audit</li>
                    <li>Fixed asset reconciliation and management</li>
                    <li>IT Audit</li>
                    <li>Attestation and Certification</li>
                </ul>
            </>
        ),
        "assurances": (
            <>
                <h2>ASSURANCES</h2>
                <p><b>Auditing & Assurance Service in India
                </b></p>
                <p>The businesses worldwide are changing rapidly, together with dynamic laws, regulations and economic environment. Extensive disclosures requiring detailed analysis of the Financial Statements are mandated under various statues which in turn places significant importance of independent statutory audits. Financial statements are the ultimate report card of a company’s fiscal performance. They enable owners and managers to pursue their business objectives, whether they are raising capital, acquisition, divestiture or restructure. Further meeting investor expectations begins with the completeness, accuracy and fair presentation of information in your financial statements and disclosures. The audit is key to sustaining confidence in both your company and the financial system at large. It must keep pace with a fast-evolving corporate reporting environment – one characterised by investor scepticism and the 24/7 scrutiny of corporate information, including non-financial information. Auditing thus involves much more than just the legal obligation of certifying annual accounts. We are truly the best provider of Audit services in Ahmedabad, Gujarat as well as Audit Service in India.
                </p>
                <p>At M. S. Chhajed, we have long standing track record of such indisputable assurance provided to our esteemed clients on various matters. Our belief that auditing and assurance services in Ahmedabad are a ‘profit centre’ rather than a ‘cost centre’ have also been endorsed by our clients; the testimony of which lies in our decades long association with them. We deliver tailor-made assurance services in India accentuated by impeccable quality to our clients in local and global marketplace. Our focus is on assisting our clients in steering through complex professional requirements with clarity and agility. Our focused approach helps in navigating complexities to provide insights in your business with customised solutions. Our auditors worked with utmost diligence and provided suggestions that helped us greatly in getting a new vision towards success. We provide top-quality Auditing & Assurance Services in Sanand, Gujarat.
                </p>
                <br />
                <p>Our assurance team has considerable experience and expertise in providing:
                </p>
                <ul>
                    <li>Audit of financial statements prepared in accordance with various GAAP’s (Ind-GAAP /IND-AS/ IFRS) under various auditing standards.</li>
                    <li>Review of the finical statements in accordance with various GAAP’s (Ind-GAAP /IND-AS/ IFRS) under various auditing standards</li>
                    <li>Internal Audit and Pre-Audit</li>
                    <li>Management Audi</li>
                    <li>
                        Due Diligence</li>
                    <li>Forensic Audit</li>
                    <li>Stock Audit
                    </li>
                    <li>Secretarial and other Company Law Compliance Audit</li>
                    <li>Fixed asset reconciliation and management</li>
                    <li>IT Audit</li>
                    <li>Attestation and Certification</li>
                </ul>
            </>
        ),
        "transaction-advisory": (
            <>
                <h2>TRANSACTION ADVISORY</h2>
                <p><b>M&A Consulting services and Project Financing in India</b></p>
                <p>Inorganic growth can provide a much-needed boost to a company’s capabilities. Investors must evaluate the accounting, tax, regulatory, legal, management and cultural aspects of the target company. While investors would like to have complete and accurate information to make critical decisions, such information is not readily available and is often difficult to evaluate. On-the- ground knowledge greatly improves the probability of a deal’s proper execution and success.</p>
                <p>While we, at M. S. Chhajed, focus on enabling transactions between a range of operating structures such as corporate entities, limited liability partnerships, trusts and many others, we do so by developing a deep connect with the business model. Our team is involved at every stage of the process followed by post-transaction hand-holding until our client is ready for the final handover. By creating an assumption-led notion of the business model based on research, we gather the ability to see the value it can deliver, and thus make sure that the core of every transaction is driven by ‘trust’. We work as project managers with our goal being the success of your business and its continued growth. We don’t work just as your advisers or consultants but more as your “Implementation Partners”. Our range of transaction advisory and support services encompasses:</p>
                <br />
                <p><b>1. Foreign Exchange Management Compliance</b></p>
                <p>Globalization and cross border transactions have increased the flow of funds, inbound and outbound, resulting into substantial regulations and compliances. Thus the need arises to keep a regular eye on foreign exchange transactions, in context of sectoral caps, investment caps, so as to circumvent from the huge penalties. In order to avoid such damaging circumstances and to ensure due compliance we provide following services:</p>
                <ul>
                    <li>Foreign Direct Investment Services</li>
                    <li>Investment by Non-Residents or Non-Resident Indian</li>
                    <li>Opening Liaison office in India</li>
                    <li>Opening Branch and Project office in India</li>
                    <li>Foreign investment Promotion Board approvals</li>
                    <li>Advisory on FEMA and DTAA provisions.
                    </li>
                    <li>Compliances with the Reserve Bank of India</li>
                    <li>Representation and proceedings before Enforcement Directorate</li>
                </ul>
                <p><b>2. Valuation</b></p>
                <p>With continuous changes in regulatory and business environment, valuation of assets has become more complex than ever. This requires a reliable valuation advice with the right mix of knowledge, technical expertise, analytical skills, understanding of market dynamics and a high degree of professional judgment. At M. S. Chhajed & Co., with our leading-edge technical rigor combined with our in-depth industry knowledge and extensive experience, we offer legally driven independent and transparent business valuation services which encompass:</p>
                <ul>
                    <li>Valuation opinions for various reasons such as acquisition, investment, disposal, buyout, merger, amalgamations, restructuring, spin-off etc.</li>
                    <li>Valuations for International and Indian accounting standards
                    </li>
                    <li>
                        Tax valuations for inheritance tax, income tax purposes, including employee shares and share options</li>
                    <li>Investment and transactional advice, including fairness opinions</li>
                    <li>Accounting and financial reporting support</li>
                    <li>Tax planning support</li>
                    <li>Valuation for share purchase, investments and fund raising</li>
                    <li>
                        Valuation for purchase price allocation for accounting for business combinations under IFRA and Indian GAAP
                    </li>
                    <li>Build and review financial models</li>
                </ul>
                <p><b>3. Mergers and Acquisitions</b></p>
                <p>We are leading Mergers and Acquisitions Advisor in India, The need for consolidation of businesses and increased competition amongst companies has led to an increase in Merger & Acquisition activity over the past few years. M&A bring a number of legislations and complex accounting, tax and regulatory issues in play, making it critical to find a unique approach for efficient & timely conceptualization and implementation of the transaction. Our experience in different environments and jurisdictions, combined with industry and technical knowledge provide valuable insights and innovative M&A strategy, We provide M&A Consulting services in Ahmedabad, Gujarat. Our range of activities includes the following:</p>
                <ul>
                    <li>Forecasts</li>
                    <li>Assistance in relation to the fund-raising process</li>
                    <li>Financial, fiscal & regulatory review</li>
                    <li>
                        Representation before various authorities like Registrar of Companies</li>
                    <li>Assess and manage acquisition / merger risk.</li>
                    <li>Structure acquisitions to optimize net cash flows.</li>
                    <li>Carry out pre-acquisition due diligence.</li>
                    <li>Ensure tax efficient deal structuring.</li>
                    <li>Ensure post-deal integration.</li>
                    <li>Optimize the tax and financial position of the combined enterprise.</li>
                    <li>Drafting and negotiation of transaction agreements in connection with M&A</li>
                </ul>
                <p><b>4. Finance</b></p>
                <p>Finance is the bloodline of the business and is crucial to its success. Team at M.S. Chhajed, has an exhaustive knowledge of domestic laws, as well as practical experience in issues relating to the Financial Sector. We have arrangements with senior advisors, who, in the past, have worked with the regulators and provide a valuable perspective of Project Financing in India.</p>
                <p>Our team focuses on finding opportunities and leveraging them to the advantage of the clients through tailored and innovative approaches. The practice has been built upon complementary components of industry/sector knowledge, multifaceted tools and the ability to deliver services locally and globally.</p>
                <p>We are your trusted partner for Project Finance Consulting in India:</p>
                <ul>
                    <li>Preparing company for fund raising</li>
                    <li>Advice on business plan and projections</li>
                    <li>Access to the right debt and equity providers</li>
                    <li>Restructuring of existing business</li>
                    <li>Seeking approval for commencing new business activities</li>
                    <li>Seeking Private equity investments</li>
                </ul>
                <p><b>5. Due Diligence</b></p>
                <p>Due Diligence services help investors or sellers of a business identify the financial, business and sector-specific risks associated with a transaction. Effective due diligence is a must if parties are to be spared the enormous loss of time, money and reputation from deals that fail to meet expectations. Our focus lies on providing a holistic view beyond simple accounting analysis. The financial and tax due diligence process commences with defining the scope where we engage with the management to have a thorough understanding of the objectives of the proposed transaction. Once the scope is defined, field work commences.</p>
                <p>Our approach while conducting due diligence for Buy Side, Sell Side and Vendor Support transactions is as follows:</p>
                <ul>
                    <li>
                        Thoroughly understand the target entity’s business and provide insights on their operations</li>
                    <li>Extensively assess the risk profile of the target and its industry with respect to your investment objectives</li>
                    <li>Identify potential deal breakers</li>
                    <li>Identify and quantify the tax exposure in terms of hidden cost, contingencies and commitments</li>
                    <li>Showcase the strengths and weaknesses in the company’ financials</li>
                    <li>
                        Identifying synergies between the companies</li>
                    <li>Vendor side due diligence</li>
                    <li>Financial, Legal and taxation due diligence to avoid future liabilities</li>
                </ul>
                <p><b>6. Restructuring</b></p>
                <p>Growing opportunities for foreign direct investment and strategic alliances in India have increased the need for transaction advisory and restructuring services. Constant examination of business practices and structures is necessary to ensure continual improvement, essential to flourish in today’s dynamic world. The need for structuring may arise due to various external and internal factors.</p>
                <p><b>External factors could include:</b></p>
                <ul>
                    <li>
                        Business expansion</li>
                    <li>
                        Business divestment</li>
                    <li>Higher returns for business through disposal of non-core</li>
                </ul>
                <p><b>Internal factors could include:</b></p>
                <ul>
                    <li>
                        Enhancing business performance</li>
                    <li>
                        Tax planning</li>
                    <li>Consolidation/separation of the business</li>
                    <li>Unlocking the value of the business</li>
                    <li>Business re-organisation – division/dispute resolution/succession</li>
                    <li>
                        Profit repatriation</li>
                    <li>Winding up</li>
                </ul>
                <p>At M. S. Chhajed, we provide a complete suite of financial and strategic advisory services in a manner that helps you drive transactions in the most efficient and effective way. While working as your partner, our approach is that of a Project Manager providing an end-to-end solution. We create value addition by helping in determining the following:</p>
                <ul>
                    <li>Structure of the entity</li>
                    <li>Identify optimal capital structures and financing strategies</li>
                    <li>Ensure that the restructuring is compliant with all regulations</li>
                    <li>
                        Legal Compliances</li>
                    <li>Obtaining requisite approvals</li>
                    <li>Joint Venture/Strategic partnership</li>
                    <li>Corporate Restructuring</li>
                    <li>Merger / Demerger</li>
                    <li>ESOP Advisory</li>
                    <li>Winding up</li>
                </ul>
            </>
        ),
        "direct-taxes": (
            <>
                <h2>DIRECT TAXES</h2>
                <p>India is on the verge of radical tax changes and has witnessed certain big policy changes such as General Anti Avoidance Rules, Income Computation Disclosure Standards (broadly known as tax accounting standards), Undisclosed Foreign Income and Assets Act, taxation on indirect transfer of Indian Assets in overseas deal, each with its own set of complications and resultant massive impact on the business.</p>
                <p>With certain uncertainty in Indian Tax regime comes an opportunity, but the key is to be prepared in advance. Most business decisions have tax impact which are complicated in nature and needs proper understanding of various scenarios and their implications for proper decision making and implementation on apt strategies.</p>
                <p>Our Direct Tax Team possesses significant expertise in domestic and interna-tional tax matters and is committed to assist businesses in developing resilient framework, thereby empowering them to mange tax exposures and mitigate tax risks. We seamlessly combine the research and depth of large firms and personal attention and relationship approach of smaller firms to ensure that our clients’ receive incomparable level of partner and management involvement, quality and timely services and responsiveness to deal with their tax issue in diligent manner. Shorter decision making chains and more senior personal involvement enables us to take a comprehensive view and operate in agile and coordinated way.</p>
                <p>Our methodology and approach is especially custom-built to suit our client’s business structure and target market. Our approach not only permits our client’s to ensure that their compliance obligations are being met on a timely basis, but also enables them to create value in a variety of complex tax environments thereby unlocking their potential for growth. At M. S. Chhajed & Co. we provide comprehensive advice and assistance on direct taxes. Our tax vertical services include:
                </p>
                <ul>
                    <li>Tax Planning and Structuring</li>
                    <li>Tax Advisory for Non-residents and Expats</li>
                    <li>Interaction taxation Advisory</li>
                    <li>Corporate Tax Advisory and Compliances</li>
                    <li>Transaction Tax Advisory</li>
                    <li>
                        Estate duty and Succession Planning</li>
                    <li>
                        Withholding Tax Advisory</li>
                    <li>Tax Audits</li>
                    <li>Representation and Litigation Services</li>
                    <li>Tax Dispute resolution and Settlement Advisory</li>
                </ul>
            </>
        ),
        "goods-and-services-tax": (
            <>
                <p>Taxes which are ultimately bourn by final consumers are called Indirect Taxes. Generally any transaction, whether in goods or services, attracts various indirect taxes. Indirect taxes are usually borne by the final consumer. Therefore, if a business entity fails to anticipate the applicability of an indirect tax and does not recover the same from the consumer it becomes a cost to the entity and is a direct hit to the bottom line. Consequently indirect taxes have a direct bearing on the costs, pricing policy, cash flow and profitability and ultimately the competitiveness of an organisation. Hence it becomes critical to evaluate the impact of various indirect taxes on any given transaction.</p>
                <p>Historically, India divided the power to tax various transactions between the Union and the States. This was especially true about indirect taxes such as excise, services tax, sales tax and value added tax. This resulted in different taxes being applied by the Central and State tax departments on sales and services transactions. The taxes were not deductible against each other and varied in rates of tax, compliance requirements and assessment procedures. Apart from cascading taxation, the system created several artificialities within business to ensure tax efficiencies. These taxes were replaced by a uniform Goods and Services Tax (GST) regime in July, 2017. The new regime aims at greater transparency and fairness but involves a robust compliance system. Though a rather complex and convoluted regime is implemented in India, it has ensured most transactions are tax neutral and allowed companies to focus on their business rather than tax efficiency models.</p>
                <p>However, being a new regime, it bring new challenged and needs redressals such as transition procedures, intangibles, anti-profiteering, classification, refunds, input credits, transaction in securities, trade promotion schemes, subvention income, securitization, and other issues.</p>
                <p>At M. S. Chhajed & Co. we provide comprehensive advice and assistance on indirect taxes. Our services broadly cover the following:
                </p>
                <ul>
                    <li>GST Advisory</li>
                    <li>GST Implementation</li>
                    <li>GST Compliance</li>
                    <li>GST Trainings</li>
                    <li>Compliance Review and Exposure Assessment</li>
                    <li>Representation and Litigation</li>
                </ul>


            </>
        ),
        "transfer-pricing": (
            <>
                <h2>Transfer Pricing services in India</h2>
                <p>Multinational organisations are operating in an environment of unprecedented complexity. Increased inter-company transactions, both domestic as well as cross- border, in midst of evolving transfer pricing regulatory landscape with each country trying to maximise its share of tax revenue, accompanied by increased enforcement activities have made Transfer Pricing and determination of Arms Length price (ALP) a leading risk management issues for organizations.
                </p>
                <p>In India, the ongoing enforcement of transfer pricing regulations in the country and adjustments being made focussing on new and more complicated issues have brought to the fore the reality that Transfer pricing controversies are expensive and time- consuming to deal with and frequently result in double taxation of income and lead to considerable uncertainty. Further, with the advent of Base Erosion and Profit Shifting (“BEPS”), transfer pricing is expected to become a focus area for India and other jurisdictions as well.
                </p>
                <p>Our Transfer Pricing team provides a range of Transfer Pricing services in India from provision of Advance Pricing agreements to services to handling large global assignments including Country by Country reporting. We are a dynamic organisation assisting clients in corporate decision-making at different stages of inter-company transactions by providing tailored solutions i.e. planning, policy-making, implementation, robust documentation and compliance along assisting clients before the revenue and appellate authorities. Our Transfer Pricing services in Ahmedabad, Gujarat include the following:
                </p>
                <p><b>Compliance</b></p>
                <ul>
                    <li>Transfer pricing compliance documentation for international transactions and specified domes-tic transactions including following analysis:
                        <ul>
                            <li>Functional</li>
                            <li>Assets</li>
                            <li>Risk and Industry overview</li>
                        </ul>
                    </li>
                    <li>
                        Preparation of Accountant’s Report in Form 3CEB
                    </li>
                    <li>
                        Master File and country-by-country (CbC) reporting
                        <ul>
                            <li>Assistance in preparation of Master File</li>
                            <li>
                                Assistance in preparation of CbC Report where:
                                <ul>
                                    <li>The ultimate parent company is in India</li>
                                    <li>The Indian entity is designated as the Alternative Reporting Entity</li>
                                    <li>Indian entity does not have an agreement for exchange of CbC Report with country of foreign parent</li>
                                    <li>Despite having an exchange agreement, country of foreign parent (or ARE) fails to share CbC Report</li>
                                </ul>
                            </li>
                            <li>Assistance in communicating and liasoning with the authorities Advisory</li>
                        </ul>
                    </li>
                    <li>
                        Assistance in setting up business and structuring the operational model
                    </li>
                    <li>Restructuring of existing business model to build tax/commercial efficiencies</li>
                    <li>Due diligence report (DDR) assistance from transfer pricing perspective in order to ensure that the business model and pricing arrangements of target acquisition are defensible</li>
                    <li>Review of deemed international transactions</li>
                    <li>Assistance in preparing profit attribution studies</li>
                    <li>Assistance in preparing global transfer pricing policy document</li>
                    <li>Supply chain restructuring</li>
                    <li>Structuring management fee payments, royalty payments, inter-company financing ar-rangements</li>
                </ul>
                <p><b>Dispute Avoidance/Resolution
                </b></p>
                <ul>
                    <li>Assistance in representation before:
                        <ul>
                            <li>Transfer Pricing Officer</li>
                            <li>Commissioner of Income Tax (Appeals)</li>
                            <li>Dispute resolution panel</li>
                            <li>Appellate tribunals</li>
                        </ul>
                    </li>
                    <li>Drafting of submissions, appeals and letters to the revenue/appellate authorities</li>
                    <li>Tax briefings and providing external support to external counsels for representation before High Courts and Supreme Court</li>
                    <li>Assistance in Advance Pricing Agreements (APA) proceedings</li>
                    <li>Assistance with mutual agreement procedures (MAP)</li>
                    <li>Assistance in relation to Safe Harbour application</li>
                </ul>
            </>
        ),
        "knowledge-process-outsourcing": (
            <>
                <p>Back-office and support functions entail resources of an organisation in terms of manpower, competence and accuracy, and significant time, all these translating these functions into a significant cost centre for an organisation. Outsourcing is increasingly being leveraged by organizations to seek better management focus on core activities for strategic results and transfer back-office and support functions including compliance activities to a competent and knowledgeable outsourced services provider. It has truly emerged as a strategic tool to enhance performance, increase flexibility, control costs and optimize their operations. At M. S. Chhajed & Co., we help you decide what functions can be outsourced successfully, and work with you to develop and implement a measurable outsourcing solution that aligns with your key business goals.</p>
                <p>Accounts Outsourcing team at M. S. Chhajed & Co. can help you and your business to prosper by taking over routine yet complex activities like payroll management, bookkeeping.</p>
                <p>Our key offerings in the Business Outsourcing include:</p>
                <p><b>Book-keeping</b></p>
                <p>Book keeping is one of the most essential components of running a professionally managed company. It is a series of processes which records the transactions carried out by a company in its ordinary course of business. The essence of book keeping should be such that not only all the transactions carried out by the company are reflected in their books of accounts, but the books should qualitatively and quantitatively depict the position of the business and its core competence and high productivity avenues.</p>
                <p>Our bookkeeping outsourcing services include:
                </p>
                <ul>
                    <li>Preparation and Maintenance of books of accounts</li>
                    <li>Providing monthly or quarterly management accounts</li>
                    <li>Preparation of annual statutory accounts</li>
                    <li>Recording and reconciling all bank, cash and credit card transactions</li>
                    <li>Accounts payable / receivable processing</li>
                    <li>Support for managing working capital</li>
                    <li>
                        General ledger maintenance</li>
                    <li>Monthly and year-end closing assistance</li>
                    <li>
                        Accounting systems design</li>
                    <li>Depreciation schedules</li>
                </ul>
                <p>At M. S. Chhajed & Co., we believe that timely information with skilled analysis of financial ratios and trends of transactions ensures effective and prompt decision making.</p>
                <p><b>Payroll Management</b></p>
                <p>The Payroll Management System deals with the financial aspects of employee’s salary, allowances, deductions, gross pay, net pay etc. and generation of pay-slips for a specific period. A payroll system generates a multitude of reports for hourly and salaried employees. The payroll process has to be highly efficient and streamlined to ensure any follow up costs and query regeneration are minimalized.</p>
                <p>At M. S. Chhajed & Co., we offer a full payroll compliance service. Some examples of our payroll management outsourcing services include:</p>
                <ul>
                    <li>Payroll management and processing</li>
                    <li>Employee full and final processing support
                    </li>
                    <li>Processing timesheets and generating payslips</li>
                    <li>
                        Generating periodic reports</li>
                    <li>
                        Computation and deposit of withholding tax along with associated return filings
                    </li>
                    <li>Provident fund related support</li>
                    <li>Dealing with joining and leaving policies</li>
                    <li>Payroll administration - calculation, payment and compliance</li>
                </ul>
                <p>Dedicated and well knit team of professionals at M.S. Chhajed & Co. works with accuracy and confidentiality enhancing the administration and efficiency of the business.</p>
                <p><b>Budgeting and Forecasting</b></p>
                <p>Budgeting and forecasting is an integral business activity leading to the achievement of various business objectives. Budgeting is the process of quantifying costs attributable to a specific department or cost centre. It deals with the estimation and deployment of specific funds available to the business unit. A budget should typically be created in an integrated and phased manner in such a way that the department or business unit does not feel short- changed in comparison with its scope and extent of activities.</p>
                <p>Forecasting deals with the estimation of revenue or net proceeds from the sale of a company’s product or service. Forecasting plays an important role in establishing and estimating the cash flow of a company. A proper forecasting process would take into consideration the factors which would create a ‘cash-crunch’ situation for the company and the solutions which could be employed to ensure that this eventuality does not take place.</p>
                <p>Budgeting and Forecasting can lead to various benefits like:</p>
                <ul>
                    <li>Creation of a Budget for each department and cost centre as well as the creation of a Forecast for determining the expected revenue and its effect upon the company’s cash flow</li>
                    <li>Comparison of the budget with the actual figures and subsequent analysis of the same</li>
                    <li>Identifying the reasons for the under absorption/over absorption as compared to the budgeted figures</li>
                    <li>Effect of the deviation on the company’s P&L</li>
                    <li>Suggestions/ Recommendations for remedial measures</li>
                </ul>
                <p>At M.S. Chhajed & Co., we enable your resources to be used more efficiently with our proactive, efficient and cost effective service, backed with rich skilled resources and expertise in budgeting and forecasting.</p>



            </>
        ),
        "Commertial-and-legal-assistance": (
            <>
                <p>At M. S. Chhajed & Co. our focus goes beyond the legal minutiae, as we assess what each agreement or document could mean financially for each party in the short term and long term, as well as the tax and other implications that may arise from it. Our range of commercial and legal assistance includes:</p>
                <p><b>Commercial Drafting</b></p>
                <p>The setting up and operation of a corporate requires substantial and timely compliances with the local statutes and regulations. In order to ensure compliances, we provide fundamental legal services and support in form of regulatory advice and compliance, assistance and advice on following matters:</p>
                <ul>
                    <li>Company law matters</li>
                    <li>
                        Agreement drafting and vetting</li>
                    <li>Corporate secretarial services</li>
                    <li>Participation and assistance on holding annual and board meetings</li>
                    <li>Appearance and representation services before the Reserve Bank of India, Security and Exchange Board of India and national Company law Tribunal and general legal consultancy</li>
                    <li>Corporate Governance</li>
                    <li>Bankruptcy and insolvency proceedings</li>
                </ul>
                <p>Dedicated team of Chartered Accountants and Company Secretary in M.S. Chhajed & Co. provides all the necessary legal advisory and compliance support services in the field of Company Law and Labor laws for an enterprise to operate in India. Professionals in M.S. Chhajed & Co. have provided corporate compliance services to various clients and also advised on formation, investment, organization and winding-up of various corporate and drafting variety of contracts including business development agreements, takeover agreements and contract agreements.</p>
                <p><b>Business Start up Services</b></p>
                <p>Incorporation and setting up of Company, LLP, Joint Ventures, Firms, HUFs’, Trusts, Society, Association of Persons, and Body of Individuals requires various compliances and approvals. In order to ensure timely and hassle free incorporation we provide legal compliances and assistance on following matters is required:</p>
                <ul>
                    <li>Drafting of constitution of the entity</li>
                    <li>Registering with various authorities including Ministry of Corporate Affairs, Registrar, Charity Commissioner, Foreign Investment Promotion Board, Reserve Bank of India, various tax authorities.</li>
                    <li>
                        Applying for licenses and seeking regulatory approval</li>
                    <li>Setting up wholly owned subsidiary, branch, liaison office, joint venture or project office</li>
                    <li>
                        Vendor agreement, lease agreement and employment agreement</li>
                </ul>
                <p>Having provided business set up services to several entities, the professionals at M. S. Chhajed & Co. have the requisite knowledge and extensive experience in, dealing with the issues arising in such circumstances.
                </p>
                <p><b>Real Estate Regulation</b></p>
                <p>The real estate sector plays a crucial role for housing and infrastructure in the country.Inspite of the high growth in the sector, it has largely remained unregualated, without professionalism and lack of adequate consumer protection. This has lead to an unhealthy growth of the industry, emphasising the need for Government regulation. With the intention to regulate the sector and safeguard the interest of the developers as well as consumer, Real Estate Regulation Act was enacted. Our team of skilled professionals can assist in the following:</p>
                <ul>
                    <li>Drafting of agreement of sale</li>
                    <li>Drafting of sale deed
                    </li>
                    <li>
                        Settlement agreements</li>
                    <li>
                        Appearance before the Authority</li>
                    <li>Appeal and appearance before the tribunal</li>
                </ul>
            </>
        )
        // Add content for other practices
    };
    useEffect(() => {
        // Scroll to top when the component mounts
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth", // Adds smooth scrolling
        });
    }, []);
    return (
        <div id="separatePracticeContainer">
            <div className="ContainerDefault separatePracticeContainer">
                {/* <h1 className="MainHeadingContainer">{practiceContent[practiceName] ? practiceContent[practiceName].props.children[0] : "Practice Not Found"}</h1> */}
                <div >
                    {practiceContent[practiceName] || (
                        <p>Sorry, no content available for this practice.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PracticesSeparate;
