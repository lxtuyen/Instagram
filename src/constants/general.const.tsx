import { TSidebarLinks } from '@/types/general.type';
import IconMessage from '@/icon/IconMessage';
import IconOutlineMessage from '@/icon/IconOutlineMessage';
import IconCompass from '@/icon/IconCompass';
import IconOutlineHome from '@/icon/IconOutlineHome';
import IconHome from '@/icon/IconHome';
import IconOutlineSearch from '@/icon/IconOutlineSearch';
import IconSearch from '@/icon/IconSearch';
import IconOutlineCompass from '@/icon/IconOutlineCompass';
import IconOutlineHeart from '@/icon/IconOutlineHeart';
import IconHeart from '@/icon/IconHeart';
import { UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';

export const sidebarLinks: TSidebarLinks[] = [

  {
    title: 'Trang chủ',
    icon: <IconOutlineHome />,
    iconIsActive: <IconHome />,
    path: '/',
  },
  {
    title: 'Tìm kiếm',
    icon: <IconOutlineSearch />,
    iconIsActive: <IconSearch />,
    isSearch: "Tìm kiếm"
  },
  {
    title: 'Khám phá',
    icon: <IconOutlineCompass />,
    iconIsActive: <IconCompass  />,
    path: '/explore',
  },
  {
    title: 'Tin nhắn',
    icon: <IconOutlineMessage />,
    iconIsActive: <IconMessage  />,
    path: '/messages',
  },
  {
    title: 'Thông báo',
    icon: <IconOutlineHeart />,
    iconIsActive: <IconHeart  />,
  },
  {
    title: 'Trang cá nhân',
    icon: <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />,
    iconIsActive: <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />,
    path: '/users',
  },
];
