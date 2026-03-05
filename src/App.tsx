import React from 'react';
import { motion } from 'motion/react';
import { 
  ShieldCheck, 
  Info, 
  ChevronRight,
  AlertCircle,
  MessageSquareOff,
  Hand,
  UserCheck,
  LogOut,
  Package,
  CarFront,
  Brain,
  StopCircle
} from 'lucide-react';

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
    {children}
  </h2>
);

const Card = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className={`bg-white rounded-3xl p-6 shadow-sm border border-gray-100 mb-4 ${className}`}
  >
    {children}
  </motion.div>
);

const SafetyCard = ({ icon: Icon, title, desc, colorClass, iconColorClass }: { icon: any, title: string, desc?: string, colorClass: string, iconColorClass: string }) => (
  <div className="min-w-[200px] w-[200px] bg-white rounded-2xl p-5 shadow-sm border border-gray-100 snap-start shrink-0 flex flex-col">
    <div className={`p-3 rounded-xl w-fit mb-4 ${colorClass}`}>
      <Icon className={`w-6 h-6 ${iconColorClass}`} />
    </div>
    <p className="text-[14px] font-bold text-gray-800 leading-snug mb-2 break-keep">{title}</p>
    {desc && <p className="text-[12px] text-gray-500 leading-relaxed mt-auto break-keep">{desc}</p>}
  </div>
);

export default function App() {
  return (
    <div className="max-w-[390px] mx-auto bg-gray-50 min-h-screen pb-20 font-sans">
      {/* Header / Hero */}
      <header className="bg-kakao-yellow pt-12 pb-10 px-6 rounded-b-[40px] relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative z-10"
        >
          <div className="flex items-center gap-2 mb-4">
            <div className="bg-kakao-brown text-white text-[10px] font-bold px-2 py-0.5 rounded">
              자율주행
            </div>
            <span className="text-kakao-brown font-bold text-sm">Kakao Mobility</span>
          </div>
          <h1 className="text-2xl font-black text-kakao-brown leading-tight mb-4">
            반가워요!<br />
            서울자율차에<br />
            탑승하신걸 환영합니다
          </h1>
          <p className="text-kakao-brown/80 text-sm font-medium leading-relaxed">
            고객님의 안전하고 편안한 주행을 위해<br />
            몇 가지 소개해드릴게요.
          </p>
        </motion.div>
        
        {/* Decorative elements */}
        <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/20 rounded-full blur-3xl" />
      </header>

      <main className="px-5 -mt-6 relative z-20">
        {/* Safety First Section - Moving */}
        <section className="mt-8">
          <SectionTitle>
            <ShieldCheck className="w-6 h-6 text-blue-500" />
            이동 중 꼭 지켜주세요
          </SectionTitle>
          <div className="flex overflow-x-auto gap-3 pb-4 snap-x snap-mandatory hide-scrollbar -mx-5 px-5">
            <SafetyCard 
              icon={UserCheck}
              title="탑승 내내 안전벨트는 꼭 착용해주세요"
              colorClass="bg-blue-50"
              iconColorClass="text-blue-500"
            />
            <SafetyCard 
              icon={MessageSquareOff}
              title="자율주행 매니저와 대화는 자제 부탁드립니다"
              desc="안전한 주행을 위해 주변 상황과 시스템 모니터링에 집중하실 수 있게 도와주세요"
              colorClass="bg-amber-50"
              iconColorClass="text-amber-500"
            />
            <SafetyCard 
              icon={Hand}
              title="차량 내 장치에는 손을 대지 말아주세요"
              colorClass="bg-red-50"
              iconColorClass="text-red-500"
            />
          </div>
        </section>

        {/* Safety First Section - Alighting */}
        <section className="mt-6">
          <SectionTitle>
            <LogOut className="w-6 h-6 text-emerald-500" />
            하차하실 때 꼭 지켜주세요
          </SectionTitle>
          <div className="flex overflow-x-auto gap-3 pb-4 snap-x snap-mandatory hide-scrollbar -mx-5 px-5">
            <SafetyCard 
              icon={StopCircle}
              title="차량이 완전히 정차 후 하차해주세요"
              colorClass="bg-emerald-50"
              iconColorClass="text-emerald-500"
            />
            <SafetyCard 
              icon={Package}
              title="놓고 내린 물건이 없는지 확인해주세요"
              colorClass="bg-purple-50"
              iconColorClass="text-purple-500"
            />
            <SafetyCard 
              icon={CarFront}
              title="다가오는 차량이 없는지 주위를 확인 하고 하차해주세요"
              colorClass="bg-orange-50"
              iconColorClass="text-orange-500"
            />
          </div>
        </section>

        {/* Q&A Section */}
        <section className="mt-8">
          <SectionTitle>
            <Info className="w-5 h-5 text-blue-500" />
            자주 묻는 질문
          </SectionTitle>
          <Card>
            {/* FAQ 1 */}
            <div className="mb-8 last:mb-0">
              <div className="flex gap-3 mb-2">
                <span className="text-kakao-brown font-black text-lg">Q.</span>
                <h3 className="font-bold text-gray-800 leading-tight mt-1">서울자율차는 안전한가요?</h3>
              </div>
              <div className="flex gap-3">
                <span className="text-blue-500 font-black text-lg">A.</span>
                <div className="text-gray-600 text-sm leading-relaxed mt-1">
                  <p className="mb-3">검증된 기술과 오랜 시간 테스트로 자율주행을 진행해요. 혹시 모를 상황을 대비해 ‘세이프티 드라이버’님이 함께 동승하고, 관제 센터와 연결되어 있어 비상 상황에도 바로 대처해드립니다. 안심하세요!</p>
                  <a href="https://www.notion.so/319e22853e6d800a98a8efbdb5ee931a?pvs=21" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-blue-600 font-bold bg-blue-50 px-3 py-2 rounded-xl text-xs">
                    자율주행 기술이 더 궁금해요 <ChevronRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
            
            <hr className="my-6 border-gray-100" />

            {/* FAQ 2 */}
            <div className="mb-8 last:mb-0">
              <div className="flex gap-3 mb-2">
                <span className="text-kakao-brown font-black text-lg">Q.</span>
                <h3 className="font-bold text-gray-800 leading-tight mt-1">자율주행인데 왜 기사님이 계신가요?</h3>
              </div>
              <div className="flex gap-3">
                <span className="text-blue-500 font-black text-lg">A.</span>
                <p className="text-gray-600 text-sm leading-relaxed mt-1">운전석에 앉아계신 자율주행 매니저님은 복잡한 공사 구간 등 정교한 주행이 필요할 때나 혹시 모를 비상 상황을 대비해 함께 동승하고 있어요. 시스템 모니터링 교육과 비상 대응 교육을 마쳐 승객분들이 좀 더 안심하고 편하게 이동하실 수 있게 하고 있어요.</p>
              </div>
            </div>

            <hr className="my-6 border-gray-100" />

            {/* FAQ 3 */}
            <div className="mb-8 last:mb-0">
              <div className="flex gap-3 mb-2">
                <span className="text-kakao-brown font-black text-lg">Q.</span>
                <h3 className="font-bold text-gray-800 leading-tight mt-1">서울자율차는 어떻게 탈 수 있나요? (운영정책)</h3>
              </div>
              <div className="flex gap-3">
                <span className="text-blue-500 font-black text-lg">A.</span>
                <div className="text-gray-600 text-sm leading-relaxed w-full mt-1">
                  <p className="mb-3">카카오 T에서 강남구역 내에서 이동을 하실 때 서울자율차를 선택해주세요</p>
                  <ul className="list-disc pl-5 space-y-1.5 text-gray-600 bg-gray-50 p-4 rounded-xl">
                    <li>평일 22:00 - 04:00</li>
                    <li>출발지와 도착지 강남일 때, 무료로 이용하실 수 있습니다</li>
                  </ul>
                </div>
              </div>
            </div>

            <hr className="my-6 border-gray-100" />

            {/* FAQ 4 */}
            <div className="mb-8 last:mb-0">
              <div className="flex gap-3 mb-2">
                <span className="text-kakao-brown font-black text-lg">Q.</span>
                <h3 className="font-bold text-gray-800 leading-tight mt-1">(유상전환 시점) 서울자율차 요금이 궁금해요</h3>
              </div>
              <div className="flex gap-3">
                <span className="text-blue-500 font-black text-lg">A.</span>
                <div className="text-gray-600 text-sm leading-relaxed w-full mt-1">
                  <p className="mb-3">서울자율차에서 하차하신 시간에 따라 요금을 받고 있어요</p>
                  <div className="border border-gray-100 rounded-xl overflow-hidden">
                    <table className="w-full text-xs">
                      <thead>
                        <tr className="bg-gray-50 border-b border-gray-100">
                          <th className="py-2.5 px-4 text-left font-bold text-gray-500">이용 시간</th>
                          <th className="py-2.5 px-4 text-right font-bold text-gray-500">요금</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-50">
                        <tr>
                          <td className="py-2.5 px-4 font-medium">22:00 ~ 23:00</td>
                          <td className="py-2.5 px-4 text-right font-bold text-blue-600">5,800원</td>
                        </tr>
                        <tr>
                          <td className="py-2.5 px-4 font-medium">23:00 ~ 02:00</td>
                          <td className="py-2.5 px-4 text-right font-bold text-blue-600">6,700원</td>
                        </tr>
                        <tr>
                          <td className="py-2.5 px-4 font-medium">02:00 ~ 04:00</td>
                          <td className="py-2.5 px-4 text-right font-bold text-blue-600">5,800원</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </section>

        {/* Footer Info & Actions */}
        <section className="mt-10 mb-12">
          <a 
            href="https://www.notion.so/319e22853e6d800a98a8efbdb5ee931a?pvs=21" 
            target="_blank" 
            rel="noreferrer"
            className="w-full bg-blue-600 text-white font-bold py-4 rounded-2xl mb-6 shadow-sm flex items-center justify-center gap-2 transition-transform active:scale-95"
          >
            <Brain className="w-5 h-5" />
            자율주행 기술이 궁금해요
          </a>

          <div className="bg-gray-100 rounded-2xl p-5">
            <div className="flex items-center gap-2 mb-3 text-gray-500">
              <AlertCircle className="w-4 h-4" />
              <span className="text-xs font-bold uppercase">기타 안내 사항</span>
            </div>
            <ul className="text-[11px] text-gray-500 space-y-2 list-disc pl-4 leading-relaxed">
              <li>본 서비스는 시범 운행 중으로, 상황에 따라 운행이 중단될 수 있습니다.</li>
              <li>안전한 주행을 위해 차량 내 기기 조작은 삼가 주시기 바랍니다.</li>
              <li>비상 상황 시 세이프티 드라이버의 안내에 적극 협조 부탁드립니다.</li>
              <li>강남 지역 외 운행은 불가하며, 목적지 변경이 제한될 수 있습니다.</li>
            </ul>
          </div>
        </section>
      </main>

      {/* Bottom Navigation / Status */}
      <div className="fixed bottom-0 left-0 right-0 max-w-[390px] mx-auto bg-white/80 backdrop-blur-md border-t border-gray-100 px-6 py-4 flex items-center justify-between z-50">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          <span className="text-xs font-bold text-gray-600">시스템 정상 작동 중</span>
        </div>
        <button className="bg-kakao-yellow text-kakao-brown px-4 py-2 rounded-full text-xs font-bold shadow-sm">
          고객센터 연결
        </button>
      </div>
    </div>
  );
}
