import axios from 'axios';
import { SignInRequestDto, SignUpRequestDto } from './request/auth';
import { PostBoardRequestDto, PostCommentRequstDto } from './request/board';
import { ResponseDto } from './response';
import { SignInResponseDto, SignUpResponseDto } from './response/auth';
import { DeleteBoardResponseDto, GetBoardResponseDto, GetCommentListResponseDto, GetFavoriteListResponseDto, IncreaseViewCountResponseDto, PostBoardResponseDto, PostCommentResponseDto, PutFavoriteResponseDto } from './response/board';
import { GetSignInUserResponseDto } from './response/user';

const DOMAIN = 'http://localhost:4000';

const API_DOMAIN = `${DOMAIN}/api/v1`;

const authorization = (accessToken: string) => { return { headers: { Authorization: `Bearer ${accessToken}` } } };

const SIGN_IN_URL = () => `${API_DOMAIN}/auth/sign-in`; // 로그인
const SIGN_UP_URL = () => `${API_DOMAIN}/auth/sign-up`; // 회원가입

/**
 * 서버로 로그인 요청
 * @param requestBody SignInRequestDto ( email, password )
 * @returns HttpStatus status code, message, token, expirationTime
 */
export const signInRequest = async (requestBody: SignInRequestDto) => {
    const result = await axios.post(SIGN_IN_URL(), requestBody)
        .then(response => {
            const responseBody: SignInResponseDto = response.data;
            return responseBody;
        })
        .catch(error => {
            if (!error.response.data) return null;
            const responseBody: ResponseDto = error.response.data;
            return responseBody;
        });
    return result;
}

/**
 * 서버로 회원가입 요청
 * @param requestBody 
 * @returns 
 */
export const signUpRequest = async (requestBody: SignUpRequestDto) => {
    const result = await axios.post(SIGN_UP_URL(), requestBody)
        .then(response => {
            const responseBody: SignUpResponseDto = response.data;
            return responseBody;
        })
        .catch(error => {
            if (!error.response.data) return null;
            const responseBody: ResponseDto = error.response.data;
            return responseBody;
        });
    return result;
}

// 게시물 상세
const GET_BOARD_URL = (boardNumber: number | string) => `${API_DOMAIN}/board/${boardNumber}`;

const INCREASE_VIEW_COUNT_URL = (boardNumber: number | string) => `${API_DOMAIN}/board/${boardNumber}/increase-view-count`;

const GET_FAVORITE_LIST_URL = (boardNumber: number | string) => `${API_DOMAIN}/board/${boardNumber}/favorite-list`;

const GET_COMMENT_LIST_URL = (boardNumber: number | string) => `${API_DOMAIN}/board/${boardNumber}/comment-list`;

// 게시물 등록
const POST_BOARD_URL = () => `${API_DOMAIN}/board`;

// 댓글
const POST_COMMENT_URL = (boardNumber: number | string) => `${API_DOMAIN}/board/${boardNumber}/comment`;

//
const PUT_FAVORTE_URT = (boardNumber: number | string) => `${API_DOMAIN}/board/${boardNumber}/favorite`;

// 게시물 삭제
const DELETE_BOARD_URL = (boardNumber: number | string) => `${API_DOMAIN}/board/${boardNumber}`;

/**
 * 
 * @param boardNumber 
 * @returns 
 */
export const getBoardRequest = async (boardNumber: number | string) => {
    return await axios.get(GET_BOARD_URL(boardNumber))
        .then(response => {
            const responseBody: GetBoardResponseDto = response.data;
            return responseBody;
        })
        .catch(error => {
            if (!error.response) return null;
            const responseBody: ResponseDto = error.response.data;
            return responseBody;
        })
}

/**
 * 
 * @param boardNumber 
 * @returns 
 */
export const increaseViewCountRequest = async (boardNumber: number | string) => {
    return await axios.get(INCREASE_VIEW_COUNT_URL(boardNumber))
        .then(response => {
            const responseBody: IncreaseViewCountResponseDto = response.data;
            return responseBody;
        })
        .catch(error => {
            if (!error.response) return null;
            const responseBody: ResponseDto = error.response.data;
            return responseBody;
        })
}

/**
 * 
 * @param boardNumber 
 * @returns 
 */
export const getFavoriteListRequest = async (boardNumber: number | string) => {
    return await axios.get(GET_FAVORITE_LIST_URL(boardNumber))
        .then(response => {
            const responseBody: GetFavoriteListResponseDto = response.data;
            return responseBody;
        })
        .catch(error => {
            if (!error.response) return null;
            const responseBody: ResponseDto = error.response.data;
            return responseBody;
        })
}

export const getCommentListRequest = async (boardNumber: number | string) => {
    return await axios.get(GET_COMMENT_LIST_URL(boardNumber))
        .then(response => {
            const responseBody: GetCommentListResponseDto = response.data;
            return responseBody;
        })
        .catch(error => {
            if (!error.response) return null;
            const responseBody: ResponseDto = error.response.data;
            return responseBody;
        })
}

/**
 * 
 * @param requestBody 
 * @param accessToken 
 * @returns 
 */
export const postBoardRequest = async (requestBody: PostBoardRequestDto, accessToken: string) => {
    const result = await axios.post(POST_BOARD_URL(), requestBody, authorization(accessToken))
        .then(response => {
            const responseBody: PostBoardResponseDto = response.data;
            return responseBody;
        })
        .catch(error => {
            if (error.response) return null;
            const responseBody: ResponseDto = error.response.data;
            return responseBody;
        })
    return result;
}

/**
 * 댓글
 * @param boardNumber 
 * @param requestBody 
 * @param accessToken 
 * @returns 
 */
export const postCommentRequest = async (boardNumber: number | string, requestBody: PostCommentRequstDto, accessToken: string) => {
    return await axios.post(POST_COMMENT_URL(boardNumber), requestBody, authorization(accessToken))
        .then(response => {
            const responseBody: PostCommentResponseDto = response.data;
            return responseBody;
        })
        .catch(error => {
            if (error.response) return null;
            const responseBody: ResponseDto = error.response.data;
            return responseBody;
        })
}

// 좋아요
export const putFavoriteRequest = async (boardNumber: number | string, accessToken: string) => {
    // PUT 메소드 같은 경우 {}에 RequestBody가 들어가는데 보낼 데이터가 없으므로 빈 값을 보냄
    return await axios.put(PUT_FAVORTE_URT(boardNumber), {}, authorization(accessToken))
        .then(response => {
            const responseBody: PutFavoriteResponseDto = response.data;
            return responseBody;
        })
        .catch(error => {
            if (!error.response) return null;
            const responseBody: ResponseDto = error.response.data;
            return responseBody;
        })

}

// 게시물 삭제
export const deleteBoardRequest = async (boardNumber: number | string, accessToken: string) => {
    return await axios.delete(DELETE_BOARD_URL(boardNumber), authorization(accessToken))
        .then(response => {
            const responseBody: DeleteBoardResponseDto = response.data;
            return responseBody;
        })
        .catch(error => {
            if (!error.response) return null;
            const responseBody: ResponseDto = error.response.data;
            return responseBody;
        })
}

// 로그인
const GET_SIGN_IN_USER_URL = () => `${API_DOMAIN}/user`;

/**
 * 사용자가 로그인 또는 로그아웃했을 경우 토큰 설정
 * @param accessToken useCookies()에서 cookies.accessToken으로 가져온 토큰
 * @returns GetSignInUserResponseDto{code, message, email, nickname, profileImage} | ResponseDto {code, message}
 */
export const getSignInUserRequest = async (accessToken: string) => {
    return await axios.get(GET_SIGN_IN_USER_URL(), authorization(accessToken))
        .then(response => {
            const responseBody: GetSignInUserResponseDto = response.data;
            return responseBody;
        })
        .catch(error => {
            if (!error.response) return null;
            const responseBody: ResponseDto = error.response.data;
            return responseBody;
        })
}

// 파일 업로드
const FILE_DOMAIN = `${DOMAIN}/file`;

const FILE_UPLOAD_URL = () => `${FILE_DOMAIN}/upload`;

const multipartFormData = { headers: { 'Content-Type': 'multipart/form-data' } };

/**
 * 
 * @param data file을 받아오는 것
 * @returns 
 */
export const fileUploadRequest = async (data: FormData) => {
    const result = await axios.post(FILE_UPLOAD_URL(), data, multipartFormData)
        .then(response => {
            const responseBody: string = response.data;
            return responseBody
        })
        .catch(error => {
            return null;
        })
    return result;
}