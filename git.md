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

### repository : git이 파일 기록해두는 장소

# 원격 저장소 왜 쓰는가?

내 컴퓨터에서 만들어둔 저장소를 백업해둘 수 있다고 해서 쓴다.
그래서 내 컴퓨터에서 만든 로컬저장소를 원격저장소로 백업해보자.
일단 새로운 작업 폴더다가 git init 해서 저장소 하나를 만든다.

1. 작업 폴더를 하나 만든 다음 터미널에서 열어서 git init 한다.
   그게 로컬 레포지토리 생성법임.

2. github.com은 이제 기본 브랜치 이름을 master가 아니라 main으로 사용하라고 강요한다
   그래서 우리 로컬 작업폴더에 있는 기본 브렌치 이름도 main으로 변경해준다.
   터미널 열어서

### git branch -M main

입력하면 기본 브랜치 이름이 변경된다.

3. 그 다음 commit 여러번 해봄

### Github에서 만든 원격저장소에 올리기

로컬 저장소 -> 원격 저장소
이렇게 업로드 하고 싶으면 작업 폴더에서 터미널 켜서

### git push -u 원격저장소주소 main

하면 된다.

- 로컬 저장소의 main 브랜치를 원격 저장소에 올리라는 뜻이다. 다른 브랜치도 돌릴 수 있음
- github 로그인 하라고 뜨면 로그인하면된다.
- 참고로 -u 옵션은 방금 입력한 주소 기억해두라는 뜻이다. 다음부터는 주소를 길게 입력안하고 git push만 입력해도 잘된다.

### 원격 레포지토리 주소는 https:// 로 시작해서 .git으로 끝난다.

## 원격 저장소주소 길게 입력하는게 귀찮으면

그 주소를 변수에 저장해서 사용할 수 있다. 변수에 저장하려면 터미널에 git remote add 변수명 저장소주소 입력하면 된다.

### git remote add origin https://github.com/goodafteryoon/lesson.git

이렇게 입력하면 "https:// 어쩌구" 주소가 필요할 때 마다 origin이라는 변수명을 쓸 수 있다.

(참고) 실은 -u는 방금 입력한 주소를 기억하라는 뜻이라 -u를 붙여서 1번 했었으면 나중엔 git push만 입력해도 잘 된다.
(참고) 변수 목록을 살펴보고 싶으면 git remote -v 입력

# 협업하는 법

## 기존 소스코드를 다운받아서 시작할 수 있다.

### git clone 원격저장소주소

입력하면 새로운 작업폴더에서 이거 입력해도 된다.
그럼 원격저장소에 있던 내용을 그대로 복제해준다.

### 팀원이 commit 하려는데 문제가 생긴다?

git push는 마음대로 할 수 있는게 아니다.
갑자기 다른 팀원이 만든 파일이 원격 저장소에 생기면 git push를 못한다.

### 원격 vs 로컬 내용이 다르다면 로컬저장소에서 git push가 안된다.

왜냐면 그런 상황에서 대충 git push 해버리면 코드가 꼬이기 때문에 얘가 미리 예방해준다.

## git pull을 이용하면 현재 원격 저장소 내용 가져올 수 있음

### git pull 원격저장소 주소

이러면 원격 저장소에 있던 모든 브랜치 내용을 가져와서 로컬 저장소에 합치라는 뜻이다.
이걸 해주면 로컬이 최신 상태가 되기 때문에 이제 git push가 가능하다.
결론 : 변동사항이 생겼다면 git pull 하고 나서 git push 하면된다.

(참고)

- git pull 원격 저장소주소 브랜치명 입력하면 특정 브랜치만 가져올 수 있음
- origin 이라는 변수명을 등록해놨으면 당연히 사용가능
- 예전에 -u 했었으면 git pull, git push 까지만 입력해도 잘된다.

결론 : git push 하기 전에 뭐라그러면 git pull 먼저 하자

- git merge 하려면 병합하는 브랜치로 먼저 switch
- 병합 당하는(?) 브랜치를 머지해야함
- ex) git switch dev > git merge design
