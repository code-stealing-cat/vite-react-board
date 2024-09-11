import Top3Item from '@/components/Top3Item'
import './style.css'
import { useEffect, useState } from 'react'
import { BoardListItem } from '@/types/interface'
import { top3BoardListMock } from '@/mocks'

// component: 메인 화면 컴포넌트
export default function Main() {

  // component: 메인 화면 컴포넌트
  const MainTop = () => {

    // state: 주간 top3 게시물 리스트 상태
    const [top3BoardList, setTop3BoardList] = useState<BoardListItem[]>([]);

    // effect: 첫 마운트시 실행될 함수
    useEffect(() => {
      setTop3BoardList(top3BoardListMock);
    }, []);

    // render: 메인 화면 상단 컴포넌트 렌더링
    return (
      <div id='main-top-wrapper'>
        <div className='main-top-container'>
          <div className='main-top-intro'>{'Hoons board에서\n다양한 이야기를 나눠보세요'}</div>
          <div className='main-top-contents-box'>
            <div className='main-top-contents-title'>{'주간 TOP 3 게시글'}</div>
            <div className='main-top-contents'>
              {top3BoardList.map(top3ListItem => <Top3Item top3ListItem={top3ListItem} />)}
            </div>
          </div>
        </div>
      </div>
    )
  }

  // component: 메인 화면 하단 컴포넌트
  const MainBottom = () => {
    // render: 메인 화면 하단 컴포넌트 렌더링
    return (
      <>
      </>
    )
  }

  // render: 메인 화면 컴포넌트 렌더링
  return (
    <>
      <MainTop />
      <MainBottom />
    </>
  )
}
