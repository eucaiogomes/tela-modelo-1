/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { 
  Home, 
  ChevronRight, 
  Folder, 
  PlayCircle, 
  FileText, 
  CheckCircle2, 
  Clock, 
  Calendar, 
  DollarSign,
  Info,
  Award,
  BarChart3,
  Monitor,
  Bell,
  MessageSquare,
  Search,
  Users,
  Eye
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from '@/components/ui/tabs';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Breadcrumb, 
  BreadcrumbItem, 
  BreadcrumbLink, 
  BreadcrumbList, 
  BreadcrumbPage, 
  BreadcrumbSeparator 
} from '@/components/ui/breadcrumb';
import { cn } from '@/lib/utils';
import { Course, Module } from './types';
import { 
  ResponsiveContainer, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Cell 
} from 'recharts';

const PERFORMANCE_DATA = [
  { name: 'Módulo 1', score: 100 },
  { name: 'Módulo 2', score: 85 },
  { name: 'Módulo 3', score: 90 },
  { name: 'Módulo 4', score: 21 },
  { name: 'Módulo 5', score: 0 },
];

const COURSE_DATA: Course = {
// ... (rest of the data)
  id: '1',
  title: 'Configurando o seu Movidesk',
  progress: 21.43,
  modules: [
    {
      id: 'm1',
      title: 'Introdução',
      lessons: [
        { id: 'l1', title: 'Boas-vindas', type: 'video', completed: true },
        { id: 'l2', title: 'Visão Geral', type: 'video', completed: true },
      ]
    },
    {
      id: 'm2',
      title: 'Aprovação de Tickets',
      lessons: [
        { id: 'l3', title: 'Fluxo de Aprovação', type: 'video', completed: false },
      ]
    },
    {
      id: 'm3',
      title: 'Base de Conhecimento',
      lessons: [
        { id: 'l4', title: 'Criando Artigos', type: 'video', completed: false },
      ]
    },
    {
      id: 'm4',
      title: 'Contrato de Horas',
      lessons: [
        { 
          id: 'l5', 
          title: 'Contrato', 
          type: 'video', 
          completed: false, 
          lastVisited: true,
          description: 'Tipo: Vídeo'
        },
        { 
          id: 'l6', 
          title: 'Até Aqui...', 
          type: 'evaluation', 
          completed: false,
          description: 'Tipo: Avaliação de reação\nNão iniciou\nAntes de continuarmos com o conteúdo, gostaríamos de saber como está sendo sua experiência conosco nesse curso!?'
        },
      ]
    },
    {
      id: 'm5',
      title: 'Apontamento de Horas',
      lessons: []
    },
    {
      id: 'm6',
      title: 'Agenda',
      lessons: []
    },
    {
      id: 'm7',
      title: 'Despesas',
      lessons: []
    }
  ]
};

export default function App() {
  const [course] = useState<Course>(COURSE_DATA);
  const [activeTab, setActiveTab] = useState('conteudo');

  return (
    <div className="min-h-screen bg-app-background font-sans text-app-on-surface">
      {/* New Header (Navbar) */}
      <header className="bg-[#00254e] border-b border-white/10 px-4 md:px-6 py-2 flex items-center justify-between sticky top-0 z-50">
        <div className="flex items-center gap-4 md:gap-8">
          {/* Logo */}
          <div className="text-white font-bold text-lg md:text-xl tracking-tight">
            Lector
          </div>

          {/* Nav Items */}
          <nav className="hidden md:flex items-center gap-1">
            <button className="px-4 py-2 bg-white/10 rounded-lg text-app-tertiary font-semibold text-sm transition-colors">
              Conteúdo
            </button>
            <button className="px-4 py-2 text-app-on-primary-container hover:text-white font-medium text-sm transition-colors">
              Social
            </button>
            <button className="px-4 py-2 text-app-on-primary-container hover:text-white font-medium text-sm transition-colors">
              Minha Área
            </button>
          </nav>
        </div>

        {/* Search Bar */}
        <div className="flex-1 max-w-md mx-4 md:mx-8 hidden lg:block">
          <div className="relative group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-app-on-primary-container group-focus-within:text-white transition-colors" />
            <input 
              type="text" 
              placeholder="Pesquisar conteúdo..." 
              className="w-full bg-white/10 border border-white/10 rounded-full py-2 pl-10 pr-4 text-sm text-white placeholder:text-app-on-primary-container focus:outline-none focus:ring-2 focus:ring-app-tertiary/50 focus:bg-white/20 transition-all"
            />
          </div>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-2 md:gap-3">
          <button className="p-2 text-app-on-primary-container hover:text-white hover:bg-white/10 rounded-lg transition-all relative">
            <Bell className="w-5 h-5" />
            <span className="absolute top-1.5 right-1.5 w-3.5 h-3.5 md:w-4 md:h-4 bg-app-tertiary text-white text-[9px] md:text-[10px] font-bold flex items-center justify-center rounded-full border-2 border-[#00254e]">
              3
            </span>
          </button>
          <button className="p-2 text-app-on-primary-container hover:text-white hover:bg-white/10 rounded-lg transition-all">
            <MessageSquare className="w-5 h-5" />
          </button>
          <div className="ml-1 md:ml-2 w-8 h-8 md:w-9 md:h-9 bg-app-tertiary rounded-lg flex items-center justify-center text-white font-bold text-xs md:text-sm shadow-lg shadow-app-tertiary/20">
            CG
          </div>
        </div>
      </header>

      {/* Breadcrumbs */}
      <div className="px-4 md:px-6 py-3 bg-app-surface border-b border-app-outline-variant overflow-x-auto scrollbar-none">
        <div className="min-w-max">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/" className="flex items-center gap-1 text-app-on-surface-variant hover:text-app-tertiary">
                  <Home className="w-4 h-4" />
                  Início
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <ChevronRight className="w-4 h-4 text-app-outline-variant" />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbLink href="/sala-de-aula" className="text-app-on-surface-variant hover:text-app-tertiary">
                  Sala de Aula
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <ChevronRight className="w-4 h-4 text-app-outline-variant" />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbPage className="font-medium text-app-on-surface">
                  {course.title}
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      <main className="max-w-[1400px] mx-auto p-4 md:p-6 grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-6 md:gap-8">
        {/* Sidebar */}
        <aside className="space-y-6">
          <Card className="overflow-hidden border-none shadow-sm bg-app-surface">
            <div className="aspect-video w-full relative overflow-hidden">
              <img 
                src="https://picsum.photos/seed/movidesk/600/400" 
                alt="Course Thumbnail" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/10" />
            </div>
            <CardContent className="p-6 space-y-6 bg-app-primary-container">
              <h2 className="text-center font-semibold text-white text-lg">
                {course.title}
              </h2>
              
              <div className="space-y-2">
                <p className="text-xs text-center text-app-on-primary-container font-medium uppercase tracking-wider">
                  Andamento:
                </p>
                <div className="flex flex-col items-center gap-2">
                  <div className="relative w-24 h-24 flex items-center justify-center">
                    <svg className="w-full h-full transform -rotate-90">
                      <circle
                        cx="48"
                        cy="48"
                        r="40"
                        stroke="currentColor"
                        strokeWidth="8"
                        fill="transparent"
                        className="text-white/10"
                      />
                      <circle
                        cx="48"
                        cy="48"
                        r="40"
                        stroke="currentColor"
                        strokeWidth="8"
                        fill="transparent"
                        strokeDasharray={251.2}
                        strokeDashoffset={251.2 - (251.2 * course.progress) / 100}
                        className="text-app-tertiary transition-all duration-1000 ease-out"
                        strokeLinecap="round"
                      />
                    </svg>
                    <span className="absolute text-sm font-bold text-white">
                      {course.progress}%
                    </span>
                  </div>
                </div>
              </div>

              <button className="w-full flex items-center justify-between p-3 bg-white/10 rounded-md border border-white/20 text-white hover:bg-white/20 transition-colors group">
                <div className="flex items-center gap-3">
                  <Monitor className="w-4 h-4 text-app-on-primary-container group-hover:text-app-tertiary" />
                  <span className="text-sm font-medium">Sala de Aula</span>
                </div>
                <ChevronRight className="w-4 h-4 text-app-on-primary-container" />
              </button>
            </CardContent>
          </Card>
        </aside>

        {/* Main Content */}
        <div className="space-y-6 overflow-hidden">
          <Tabs defaultValue="conteudo" className="w-full" onValueChange={setActiveTab}>
            <div className="border-b border-app-outline-variant overflow-x-auto scrollbar-none">
              <TabsList className="w-full justify-start bg-transparent rounded-none h-auto p-0 gap-6 md:gap-8 min-w-max">
                <TabsTrigger 
                  value="conteudo" 
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-app-tertiary data-[state=active]:bg-transparent data-[state=active]:shadow-none px-0 py-3 text-sm font-medium text-app-on-surface-variant data-[state=active]:text-app-tertiary flex items-center gap-2"
                >
                  <Folder className="w-4 h-4" />
                  Conteúdo
                </TabsTrigger>
                <TabsTrigger 
                  value="desempenho" 
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-app-tertiary data-[state=active]:bg-transparent data-[state=active]:shadow-none px-0 py-3 text-sm font-medium text-app-on-surface-variant data-[state=active]:text-app-tertiary flex items-center gap-2"
                >
                  <BarChart3 className="w-4 h-4" />
                  Desempenho
                </TabsTrigger>
                <TabsTrigger 
                  value="informacoes" 
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-app-tertiary data-[state=active]:bg-transparent data-[state=active]:shadow-none px-0 py-3 text-sm font-medium text-app-on-surface-variant data-[state=active]:text-app-tertiary flex items-center gap-2"
                >
                  <Info className="w-4 h-4" />
                  Informações
                </TabsTrigger>
                <TabsTrigger 
                  value="certificado" 
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-app-tertiary data-[state=active]:bg-transparent data-[state=active]:shadow-none px-0 py-3 text-sm font-medium text-app-on-surface-variant data-[state=active]:text-app-tertiary flex items-center gap-2"
                >
                  <Award className="w-4 h-4" />
                  Certificado
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="conteudo" className="mt-6 space-y-4">
              <Accordion type="single" collapsible defaultValue={"m4" as any} className="space-y-3">
                {course.modules.map((module) => (
                  <AccordionItem 
                    key={module.id} 
                    value={module.id}
                    className="border border-app-outline-variant rounded-lg bg-app-surface overflow-hidden shadow-sm"
                  >
                    <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-app-background transition-colors group">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-md bg-app-background flex items-center justify-center text-app-on-surface-variant group-data-[state=open]:bg-app-tertiary/10 group-data-[state=open]:text-app-tertiary">
                          <Folder className="w-5 h-5" />
                        </div>
                        <span className="text-base font-semibold text-app-on-surface">
                          {module.title}
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-0 pb-0 border-t border-app-outline-variant">
                      <div className="bg-app-background/30">
                        {module.lessons.length > 0 ? (
                          <div className="divide-y divide-app-outline-variant">
                            {module.lessons.map((lesson) => (
                              <div 
                                key={lesson.id}
                                className={cn(
                                  "p-6 pl-12 flex flex-col gap-1 transition-colors relative",
                                  lesson.lastVisited ? "bg-green-50/30" : "hover:bg-app-surface"
                                )}
                              >
                                {lesson.lastVisited && (
                                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-green-500" />
                                )}
                                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                                  <div className="flex items-start gap-4">
                                    <div className={cn(
                                      "mt-1",
                                      lesson.completed ? "text-green-500" : "text-app-on-surface-variant"
                                    )}>
                                      {lesson.type === 'video' ? (
                                        <PlayCircle className="w-5 h-5" />
                                      ) : lesson.type === 'evaluation' ? (
                                        <FileText className="w-5 h-5" />
                                      ) : (
                                        <CheckCircle2 className="w-5 h-5" />
                                      )}
                                    </div>
                                    <div>
                                      <h4 className={cn(
                                        "text-sm font-semibold",
                                        lesson.lastVisited ? "text-green-700" : "text-app-on-surface"
                                      )}>
                                        {lesson.title}
                                        {lesson.lastVisited && (
                                          <span className="ml-2 italic font-normal text-xs text-green-600">
                                            (último tópico visitado)
                                          </span>
                                        )}
                                      </h4>
                                      {lesson.description && (
                                        <p className="text-xs text-app-on-surface-variant mt-1 whitespace-pre-line leading-relaxed">
                                          {lesson.description}
                                        </p>
                                      )}
                                    </div>
                                  </div>
                                  
                                  <div className="flex items-center gap-4 pl-9 sm:pl-0">
                                    <div className="w-32 sm:w-24 h-1.5 bg-app-outline-variant rounded-full overflow-hidden">
                                      <div 
                                        className={cn(
                                          "h-full rounded-full",
                                          lesson.completed ? "bg-green-500 w-full" : "bg-app-on-surface-variant/20 w-0"
                                        )} 
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <div className="p-8 text-center text-app-on-surface-variant text-sm italic">
                            Nenhum conteúdo disponível neste módulo.
                          </div>
                        )}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </TabsContent>

            <TabsContent value="desempenho" className="mt-6 space-y-6">
              {/* Dashboard Metrics */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <Card className="border-app-outline-variant bg-white shadow-sm overflow-hidden">
                  <div className="h-1 bg-app-tertiary w-full" />
                  <CardContent className="p-6">
                    <p className="text-[10px] font-bold text-app-on-surface-variant uppercase tracking-wider mb-1">Aproveitamento Requerido</p>
                    <h4 className="text-2xl font-black text-app-on-surface">100,00%</h4>
                  </CardContent>
                </Card>

                <Card className="border-app-outline-variant bg-white shadow-sm overflow-hidden">
                  <div className="h-1 bg-app-tertiary w-full" />
                  <CardContent className="p-6">
                    <p className="text-[10px] font-bold text-app-on-surface-variant uppercase tracking-wider mb-1">Aproveitamento Parcial</p>
                    <h4 className="text-2xl font-black text-app-on-surface">100,00%</h4>
                  </CardContent>
                </Card>

                <Card className="border-app-outline-variant bg-white shadow-sm overflow-hidden">
                  <div className="h-1 bg-red-500 w-full" />
                  <CardContent className="p-6">
                    <p className="text-[10px] font-bold text-app-on-surface-variant uppercase tracking-wider mb-1">Status Atual</p>
                    <h4 className="text-2xl font-black text-red-600">REPROVADO</h4>
                  </CardContent>
                </Card>

                <Card className="border-app-outline-variant bg-white shadow-sm overflow-hidden">
                  <div className="h-1 bg-app-primary w-full" />
                  <CardContent className="p-6">
                    <p className="text-[10px] font-bold text-app-on-surface-variant uppercase tracking-wider mb-1">Carga Horária</p>
                    <h4 className="text-2xl font-black text-app-on-surface">02:00</h4>
                  </CardContent>
                </Card>
              </div>

              {/* Charts Row */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <Card className="lg:col-span-2 border-app-outline-variant">
                  <CardHeader>
                    <CardTitle className="text-sm font-bold text-app-on-surface uppercase tracking-wider">Desempenho por Módulo</CardTitle>
                  </CardHeader>
                  <CardContent className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={PERFORMANCE_DATA}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                        <XAxis 
                          dataKey="name" 
                          axisLine={false} 
                          tickLine={false} 
                          tick={{ fill: '#434750', fontSize: 10 }}
                          dy={10}
                        />
                        <YAxis 
                          axisLine={false} 
                          tickLine={false} 
                          tick={{ fill: '#434750', fontSize: 10 }}
                          domain={[0, 100]}
                        />
                        <Tooltip 
                          cursor={{ fill: '#f7f9fc' }}
                          contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                        />
                        <Bar dataKey="score" radius={[4, 4, 0, 0]}>
                          {PERFORMANCE_DATA.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.score >= 70 ? '#eb6200' : '#00254e'} />
                          ))}
                        </Bar>
                      </BarChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>

                <Card className="border-app-outline-variant">
                  <CardHeader>
                    <CardTitle className="text-sm font-bold text-app-on-surface uppercase tracking-wider">Resumo de Tempo</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs">
                        <span className="text-app-on-surface-variant">Tempo Total Online</span>
                        <span className="font-bold text-app-on-surface">00:04:24</span>
                      </div>
                      <Progress value={15} className="h-2" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs">
                        <span className="text-app-on-surface-variant">Média por Acesso</span>
                        <span className="font-bold text-app-on-surface">00:01:08</span>
                      </div>
                      <Progress value={45} className="h-2" />
                    </div>
                    <div className="pt-4 border-t border-app-outline-variant">
                      <p className="text-[10px] text-app-on-surface-variant uppercase font-bold mb-2">Último Acesso</p>
                      <p className="text-sm font-semibold text-app-on-surface">27/02/2026 03:00</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="informacoes" className="mt-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-6">
                  <h2 className="text-2xl font-bold text-app-on-surface">
                    {course.title}
                  </h2>
                  <Card className="border-app-outline-variant">
                    <CardContent className="p-8 space-y-4">
                      <h3 className="text-lg font-bold text-app-on-surface">Sobre este curso</h3>
                      <p className="text-app-on-surface-variant leading-relaxed">
                        Este curso foi desenvolvido para ajudar você a configurar e otimizar o uso do Movidesk em sua organização. 
                        Aprenda desde os conceitos básicos até as configurações avançadas de fluxo de trabalho e atendimento.
                      </p>
                      <div className="pt-4 flex gap-4">
                        <div className="flex items-center gap-2 text-xs text-app-on-surface-variant">
                          <Monitor className="w-4 h-4" />
                          <span>100% Online</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-app-on-surface-variant">
                          <Clock className="w-4 h-4" />
                          <span>Carga horária: 02:00</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="space-y-6">
                  <div className="bg-[#f1f3f5] rounded-sm p-6 space-y-6 border-l-4 border-app-tertiary shadow-sm">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-app-on-surface-variant">
                        <Users className="w-4 h-4" />
                        <span className="text-[11px] font-medium uppercase">Nome da turma:</span>
                      </div>
                      <p className="text-sm font-semibold text-app-on-surface">{course.title}</p>
                    </div>

                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-app-on-surface-variant">
                        <Calendar className="w-4 h-4" />
                        <span className="text-[11px] font-medium uppercase">Período da turma:</span>
                      </div>
                      <p className="text-sm font-semibold text-app-on-surface">De 20/01/2025 até 04/11/2298</p>
                    </div>

                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-app-on-surface-variant">
                        <Eye className="w-4 h-4" />
                        <span className="text-[11px] font-medium uppercase">Último acesso ao conteúdo:</span>
                      </div>
                      <p className="text-sm font-semibold text-app-on-surface">27/02/2026 03:00</p>
                    </div>

                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-app-on-surface-variant">
                        <Clock className="w-4 h-4" />
                        <span className="text-[11px] font-medium uppercase">Tempo on-line no conteúdo:</span>
                      </div>
                      <p className="text-sm font-semibold text-app-on-surface">00:04:24 horas</p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="certificado" className="mt-6">
              <Card className="border-app-outline-variant">
                <CardContent className="p-12 text-center space-y-4">
                  <Award className="w-12 h-12 text-app-outline-variant mx-auto" />
                  <p className="text-app-on-surface-variant">O certificado estará disponível após a conclusão de 100% do curso.</p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
}
