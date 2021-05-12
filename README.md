# Blockchain_wallet

#### 긍정적인 소비문화 함양을 위한 블록체인 기반 dAPP 개발
1) 진행 기간: 2021.04.30-2021.05.03
2) 주요 내용
: 친환경 소비 등 긍정적인 소비를 행했을 때 블록체인 기반 리워드를 지급받을 수 있는 시스템을 구축
3) 공헌한 점 
: 이더리움 프라이빗 클라우드 환경을 활용하여 채굴 및 스마트컨트랙트 배포를 진행, aws ec2 서비스를 활용하여 백엔드 서버 구축, 안드로이드 스튜디오 프론트엔드와 블록체인 서버 통신을 구현함
4) 사용한 skill 또는 지식: geth, linux, java, node.js, aws
5) 결과/성과: 핀테크 해커톤 본선 진출


[블록체인 서버]
1. GENESIS.json 생성 풀노드 관리

![image](https://user-images.githubusercontent.com/47470113/117952310-05250580-b350-11eb-9645-1d02c561d2f8.png)

2. 스마트컨트랙트 배포 및 리워드 지급 수행

![image](https://user-images.githubusercontent.com/47470113/117952547-3998c180-b350-11eb-9963-0bea5433026f.png)

3. AWS EC2 에 등록 및 동작

![image](https://user-images.githubusercontent.com/47470113/117952615-4ae1ce00-b350-11eb-8619-8ed18cccbbf2.png)



[dAPP 작동 시나리오]
1. 핸드폰 인증 API를 활용하여 사용자 실명 인증
2. 실명 인증된 사용자에 한하여 블록체인 월렛 계정 발급
3. 긍정적인 소비(친환경 소비)를 진행한 유저에 한하여 블록체인 기반 리워드 지급


[WBS]

![image](https://user-images.githubusercontent.com/47470113/117949824-7c0ccf00-b34d-11eb-9c79-4eab8222aacb.png)


[DB schema]

![image](https://user-images.githubusercontent.com/47470113/117949905-947ce980-b34d-11eb-90d9-4761634896c9.png)


[안드로이드 스튜디오 프론트엔드 실행 화면]

![image](https://user-images.githubusercontent.com/47470113/117950068-c42bf180-b34d-11eb-9b5f-f2ca7857663e.png)


[서버, 프론트 통신 설계]

![image](https://user-images.githubusercontent.com/47470113/117950494-33a1e100-b34e-11eb-9d8f-f71bf7366c95.png)
