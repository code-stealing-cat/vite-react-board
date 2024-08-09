/**
 * 로그인을 위해 사용자가 입력할 email과 password를 담을 interface
 */
export default interface SignInRequestDto {
    email: string;
    password: string;
}