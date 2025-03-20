import React, { useState } from 'react';
import {
  Github,
  Linkedin,
  Mail,
  Moon,
  Sun,
  Download,
  MessageSquare,
  ExternalLink,
} from 'lucide-react';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      {/* Navigation */}
      <nav className="fixed w-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="hidden md:flex space-x-8">
              <button 
                onClick={() => scrollToSection('sobre')}
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Sobre
              </button>
              <button 
                onClick={() => scrollToSection('experiencias')}
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Experiências  
              </button>
              <button 
                onClick={() => scrollToSection('skills')}
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Skills
              </button>
              <button 
                onClick={() => scrollToSection('educacao')}
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Educação
              </button>
            </div>
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              Daniel Damasceno
            </h1>
            <h2 className="text-xl md:text-2xl text-blue-600 dark:text-blue-400 mb-6">
              Software Quality Assurance Engineer
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Entusiasta na criação de soluções tecnológicas inovadoras, com ênfase em garantir a qualidade no desenvolvimento de software.
            </p>
            <div className="flex gap-4">
              <a href='../DanielDamasceno.pdf' download className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg flex items-center gap-2">
                <Download className="w-4 h-4" /> Download CV
              </a>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <img
              src="../daniel_ft.jpeg"
              alt="Profile"
              className="w-64 h-64 rounded-full object-cover border-4 border-white dark:border-gray-800 shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-20 px-6 bg-white dark:bg-gray-800">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Sobre mim</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
          Sou um profissional com mais de 12 anos de experiência em desenvolvimento de softwares, com foco em Quality Assurance. 
          Sou especializado na validação de testes para aplicações escaláveis, 
          focando na qualidade e experiência do usuário. 
          Trabalhei em empresas líderes, contribuindo para o sucesso de projetos desafiadores 
          e aprimorando minhas habilidades em diversas áreas tecnológicas.
          </p>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experiencias" className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12">Experiências</h2>
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="font-bold text-xl text-gray-900 dark:text-white">Software Quality Assurance Engineer</h3>
              <p className="text-gray-600 dark:text-gray-400">PicPay • 2022 - Present</p>
              <ul className="mt-2 text-gray-600 dark:text-gray-300 list-disc pl-4 space-y-1">
                <li>Desenvolvimento/Validação de testes de APIs utilizando o Cypress e Jest com as linguagens TypeScript e JavaScript</li>
                <li>Desenvolvimento/Validação de testes de Stress e Carga utilizando o Focus</li>
                <li>Testes utilizando o Kafka</li>
                <li>Utilização de ferramentas de contaneirs como Docker e o Kubernets</li>
                <li>Participação em projetos com metodologias agéis</li>
                <li>Testes funcionais, testes de integração, testes regressivos</li>
              </ul>
            </div>

            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="font-bold text-xl text-gray-900 dark:text-white">Senior Software Quality Assurance</h3>
              <p className="text-gray-600 dark:text-gray-400">Globo • 2021 - 2022</p>
              <ul className="mt-2 text-gray-600 dark:text-gray-300 list-disc pl-4 space-y-1">
                <li>Desenvolvimento/Validação de projetos mobiles utilizando Appium com RobotFramework</li>
                <li>Desenvolvimento/Validação de testes de APIs utilizando o Mocha e Chai com Framework Supertest</li>
                <li>Desenvolvimento/Atuação/Validação de testes E2E com framework Protactor</li>
                <li>Participação em projetos com metodologias agéis</li>
              </ul>
            </div>

            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="font-bold text-xl text-gray-900 dark:text-white">Senior Software Quality Assurance</h3>
              <p className="text-gray-600 dark:text-gray-400">Noesis • 2020 - 2021</p>
              <p className="text-gray-600 dark:text-gray-400 mt-1">(Alocação Cliente Globo)</p>
              <ul className="mt-2 text-gray-600 dark:text-gray-300 list-disc pl-4 space-y-1">
                <li>Desenvolvimento/Validação de projetos mobiles utilizando Appium com RobotFramework</li>
                <li>Desenvolvimento/Validação de testes de APIs utilizando o Mocha e Chai com Framework Supertest</li>
                <li>Desenvolvimento/Atuação/Validação de testes E2E com framework Protactor</li>
                <li>Participação em projetos com metodologias agéis</li>
              </ul>
            </div>

            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="font-bold text-xl text-gray-900 dark:text-white">Analista de Qualidade Sênior</h3>
              <p className="text-gray-600 dark:text-gray-400">BRQ Digital Solutions • 2018 - 2019</p>
              <p className="text-gray-600 dark:text-gray-400 mt-1">(Alocação Cliente Caixa Econômica Federal)</p>
              <ul className="mt-2 text-gray-600 dark:text-gray-300 list-disc pl-4 space-y-1">
                <li>Desenvolvimento de Roteiro de Testes e Casos de Testes (RQM)</li>
                <li>Testes de API (Postman)</li>
                <li>Desenvolvimento de Testes Automatizados (Selenium WebDriver e Junit)</li>
                <li>Testes Unitários (Junit e Sonar)</li>
                <li>Análise e criação de Processos, atuando como Scrum Master</li>
                <li>Testes em Stores Procedures (DB2 IBM)</li>
                <li>Participação de Projetos com metodologias ágeis como o Scrum e Safe</li>
              </ul>
            </div>

            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="font-bold text-xl text-gray-900 dark:text-white">Analista de Qualidade Pleno</h3>
              <p className="text-gray-600 dark:text-gray-400">Stefanini Brasil • 2014 - 2018</p>
              <ul className="mt-2 text-gray-600 dark:text-gray-300 list-disc pl-4 space-y-1">
                <li>Desenvolvimento de Cenários de testes e Casos de Testes</li>
                <li>Execução de testes regressivos utilizando Selenium WebDriver</li>
                <li>Participação de projetos utilizando metodologias ágeis como Scrum e o Kanban</li>
              </ul>
            </div>

            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="font-bold text-xl text-gray-900 dark:text-white">Analista de Qualidade Junior</h3>
              <p className="text-gray-600 dark:text-gray-400">Acotel do Brasil • 2012 - 2014</p>
              <ul className="mt-2 text-gray-600 dark:text-gray-300 list-disc pl-4 space-y-1">
                <li>Desenvolvimento de Cenários de testes e Casos de Testes</li>
                <li>Execução de testes regressivos utilizando Selenium WebDriver</li>
                <li>Execução de testes regressivos utilizando a linguagem Python</li>
                <li>Participação de projetos utilizando metodologias ágeis como Scrum e o Kanban</li>
              </ul>
            </div>

            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="font-bold text-xl text-gray-900 dark:text-white">Analista de Suporte</h3>
              <p className="text-gray-600 dark:text-gray-400">Acotel do Brasil • 2011 - 2012</p>
              <ul className="mt-2 text-gray-600 dark:text-gray-300 list-disc pl-4 space-y-1">
                <li>Estágio em Suporte em Helpdesk</li>
              </ul>
            </div>

            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="font-bold text-xl text-gray-900 dark:text-white">Analista de Sistemas</h3>
              <p className="text-gray-600 dark:text-gray-400">IBGE • 2010 - 2011</p>
              <ul className="mt-2 text-gray-600 dark:text-gray-300 list-disc pl-4 space-y-1">
                <li>Estágio em desenvolvimento utilizando a Linguagem C#</li>
                <li>Desenvolvimento em Linguagem Asp no Projeto interno de gerenciamento de tarefas</li>
                <li>Modelagem e utilização do banco de dados Sql Server</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-white dark:bg-gray-800">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">Skills & Tecnoligas</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testing & Automation */}
            <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-4">Automação - Testes Frontend </h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700 dark:text-gray-300">Cypress</span>
                    <span className="text-gray-600 dark:text-gray-400">85%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700 dark:text-gray-300">Playwright</span>
                    <span className="text-gray-600 dark:text-gray-400">60%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '60%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700 dark:text-gray-300">Selenium</span>
                    <span className="text-gray-600 dark:text-gray-400">75%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Programming Languages */}
            <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-4">Linguagem de Programação</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700 dark:text-gray-300">TypeScript</span>
                    <span className="text-gray-600 dark:text-gray-400">70%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '90%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700 dark:text-gray-300">JavaScript</span>
                    <span className="text-gray-600 dark:text-gray-400">70%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '95%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700 dark:text-gray-300">Python</span>
                    <span className="text-gray-600 dark:text-gray-400">50%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '80%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tools & Infrastructure */}
            <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-4">Ferramentas</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700 dark:text-gray-300">Docker & Kubernetes</span>
                    <span className="text-gray-600 dark:text-gray-400">65%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '65%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700 dark:text-gray-300">Git</span>
                    <span className="text-gray-600 dark:text-gray-400">80%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '80%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700 dark:text-gray-300">Dynatrace & NewRelic</span>
                    <span className="text-gray-600 dark:text-gray-400">70%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '70%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* API Testing */}
            <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-4">Automação - Testes API</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700 dark:text-gray-300">Jest</span>
                    <span className="text-gray-600 dark:text-gray-400">95%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '95%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700 dark:text-gray-300">Cypress</span>
                    <span className="text-gray-600 dark:text-gray-400">90%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '90%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700 dark:text-gray-300">RestAssured</span>
                    <span className="text-gray-600 dark:text-gray-400">85%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Methodologies */}
            <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-4">Metodologias</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700 dark:text-gray-300">Scrum</span>
                    <span className="text-gray-600 dark:text-gray-400">95%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '95%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700 dark:text-gray-300">Kanban</span>
                    <span className="text-gray-600 dark:text-gray-400">90%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '90%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700 dark:text-gray-300">SAFe</span>
                    <span className="text-gray-600 dark:text-gray-400">85%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Performance Testing */}
            <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-4">Testes de Performance</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700 dark:text-gray-300">Focus</span>
                    <span className="text-gray-600 dark:text-gray-400">75%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700 dark:text-gray-300">K6</span>
                    <span className="text-gray-600 dark:text-gray-400">60%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '60%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700 dark:text-gray-300">JMeter</span>
                    <span className="text-gray-600 dark:text-gray-400">45%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '45%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="educacao" className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12">Educação & Certificação</h2>
          
          {/* Formal Education */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-8">Formação</h3>
            <div className="space-y-6">
              {[
                {
                  degree: 'Pós Graduação - Gerência, Análise e Projetos de Sistemas',
                  school: 'Estácio de Sá',
                  period: '2014 - 2016',
                  description: 'Especialização em Gerência, Análise e Projetos de Sistemas ',
                },
                {
                  degree: 'Bacharel em Sistemas de informação',
                  school: 'Estácio de Sá',
                  period: '2008 - 2013',
                  description: 'Graduado em análise e desenvolvimento de sistemas',
                },
              ].map((edu, index) => (
                <div
                  key={index}
                  className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {edu.degree}
                  </h4>
                  <p className="text-blue-600 dark:text-blue-400 mb-2">{edu.school}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{edu.period}</p>
                  <p className="text-gray-600 dark:text-gray-300">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications & Courses */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-8">Certificações</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  name: 'CTFL',
                  issuer: 'ISTQB - International Software Testing Qualifications Board',
                  date: 'Mar 2017',
                  credentialId: '17-CTFL-05972-BR',
                },
                {
                  name: 'Certified Scrum Master',
                  issuer: 'Scrum Alliance',
                  date: 'Jan 2018',
                  credentialId: '000740798',
                },
                {
                  name: 'Team Kanban Practitioner',
                  issuer: 'Kanban University ',
                  date: 'Jun 2023',
                  credentialId: 'Jun-202378',
                },
                {
                  name: 'Scrum Foundantion Professional Certificate (SFPC)',
                  issuer: 'Certiprof',
                  date: 'Jan 2021',
                  credentialId: '31073674',
                },
              ].map((cert, index) => (
                <div
                  key={index}
                  className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow- lg shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    {cert.name}
                  </h4>
                  <p className="text-blue-600 dark:text-blue-400 mb-2">{cert.issuer}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Issued: {cert.date}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Credential ID: {cert.credentialId}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-white dark:bg-gray-800">
        <div className="container mx-auto text-center text-gray-600 dark:text-gray-400">
          <p>© 2025 Daniel Damasceno. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;