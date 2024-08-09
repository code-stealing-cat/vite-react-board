import ResponseDto from '../response.dto';

/**
 * 사용자가 이메일과 비밀번호 입력 후 받을 응답 interface
 */
export default interface SignInResponseDto extends ResponseDto {
    token: string;
    expirationTime: number;
}