### git add(스테이징 작업)와 git commit(레포지토리로 보내는 작업)

1. git add로 기록할 파일부터 고른다
   ex) git add app.txt
2. 고른 파일을 기록하는 명령은 git commit
   ex) git commit -m '커밋 메시지 적어보기'

### 작업폴더 => staging area => repository

ex) 파일 여러개 => 기록할 파일 선택 => 선택 파일 기록
=> git add => 스테이지 => git commit => 레포 (저장소)

### 스테이징 한다 = 커밋할 파일 골라놨다는 뜻

### 여러 파일을 스테이징하려면?

git add 파일1 파일2 ...
ex) git add app.txt app2.txt

또는 모든 파일 스테이징하려면
git add .

### 상태창 열기

git status

### commit 내역 조회

git log --all --oneline

### branch 기능 = 커밋의 복사본

git branch 브랜치명
=> 브랜치를 생성해줌

### git log --oneline --all --graph

깃 커밋 내역을 그래프식을 보여줌.
여기서 HEAD가 뭐냐?
현재 위치라는 뜻임.

### coupon 브랜치 코드를 main 브랜치에 합치고 싶다면? merge

이때 conflict 해결법

1. 원하는 코드만 남기고
2. git add
3. git commit

### merge 완료된 브랜치 삭제는 git branch -d 브랜치명

### merge 안한 브랜치 삭제는 git branch -D 브랜치명

merge를 해도 브렌치는 남아있음

### rebase 쓰는 이유 : 간단하고 짧은 브렌치들은 이거 쓰면 깔끔해보임

conflict 많이 날 수 있음

### git : 파일 버전 기록해주는 프로그램임
