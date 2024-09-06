import { validator } from '@/lib/validator';
import { z } from 'zod';

export const FormSchemaLogin = z.object({
  email: z
    .string()
    .min(1, {
      message: 'Vui lòng nhập Email',
    })
    .email('Email phải hợp lệ'),
  password: z
    .string()
    .min(1, {
      message: 'Vui lòng nhập Mật khẩu',
    })
    .regex(validator.password, 'Mật khẩu phải chứa ít nhất 8 ký tự'),
});

export const FormSchemaRegister = z.object({
  email: z
    .string()
    .min(1, {
      message: 'Vui lòng nhập Email',
    })
    .email('Email phải hợp lệ'),
  password: z
    .string()
    .min(1, {
      message: 'Vui lòng nhập Mật khẩu',
    })
    .regex(validator.password, 'Mật khẩu phải chứa ít nhất 8 ký tự'),
  username: z.string().min(1, { message: 'Vui lòng nhập Tên người dùng' }),
  fullname: z.string().min(1, { message: 'Vui lòng nhập Tên đầy đủ' }),
});

export const FormSchemaComments = z.object({
  text: z
    .string()
});
