import { User } from 'types/interface';
import { create } from 'zustand';

/**
 * 사용자의 로그인 또는 로그아웃 했을 경우 쿠키 관리를 위해 사용자에 대한 정보를 담아 둘 수 있도록 관리
 */

// 이름 변경? LoginUserStore
interface LoginUserStore {
    loginUser: User | null;
    setLoginUser: (loginUser: User) => void;
    restLoginUser: () => void;
}

/**
 * 매개변수(loginUser)에는 User 타입의 데이터가 들어온다.
 * set(state => ({}) 에서 state에는 LoginUserStore가 들어온다.
 * ...state에 매개변수로 받은 loginUser가 들어간다.
 */
const useLoginUserStore = create<LoginUserStore>(set => ({
    loginUser: null,
    setLoginUser: (loginUser) => set(state => ({ ...state, loginUser })),
    restLoginUser: () => set(state => ({ ...state, loginUser: null }))
}));

export default useLoginUserStore;