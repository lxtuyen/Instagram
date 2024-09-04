import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../../components/ui/form';
import { Input } from '../../components/ui/input';
import { Button } from '../../components/ui/button';
import { FormSchemaRegister } from '@/utils/schema';
import { useState } from 'react';
import { Account } from '@/redux/authSaga';
import { authApi } from '@/api/auth.api';
import { useMutation } from '@tanstack/react-query';

export function Register() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm({
    resolver: zodResolver(FormSchemaRegister),
    defaultValues: {
      email: '',
      password: '',
      fullname: '',
      username: '',
      role: 1,
    },
  });

  const registerMutation = useMutation({
    mutationFn: (data: Account) => authApi.register(data),
  });

  const onSubmit = async (data: Account) => {
    setIsLoading(true);
    console.log(data)
    registerMutation.mutate(data, {
      onSuccess: () => {
        console.log(data)
        toast.success('Registration account successful!');
        navigate('/login');
      },
      onError: () => {
        console.log(data)
        toast.error('An error occurred. Please try again.');
      },
    });
    
  };

  return (
    <div className='flex items-center justify-center h-screen'>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='p-10 space-y-6 border rounded shadow-md w-96'
        >
          <h1 className='flex justify-center text-3xl font-bold'>Register</h1>
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder='Email' type='email' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
                    <FormField
            control={form.control}
            name='fullname'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tên đầy đủ</FormLabel>
                <FormControl>
                  <Input placeholder='Tên đầy đủ' type='text' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
                    <FormField
            control={form.control}
            name='username'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tên người dùng</FormLabel>
                <FormControl>
                  <Input placeholder='Tên người dùng' type='text' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='password'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input placeholder='Mật khẩu' type='password' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className='flex justify-center'>
          <Button type='submit' loading={isLoading}>
            Submit
          </Button>
          </div>
          <p className='font-medium flex justify-center'>
            Do you already have an account?{' '}
            <Link
              to='/login'
              className='text-blue-600 underline cursor-pointer'
            >
              Login
            </Link>
          </p>
        </form>
      </Form>
    </div>
  );
}
