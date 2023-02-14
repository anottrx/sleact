import ChatBox from '@components/ChatBox';
import ChatList from '@components/ChatList';
import InviteChannelModal from '@components/InviteChannelModal';
import React, { useCallback, useState } from 'react';
import { Container, Header } from './styles';
import useSWR from 'swr';
import { useParams } from 'react-router';
import fetcher from '@utils/fetcher';
import useInput from '@hooks/useInput';

const Channel = () => {
  const { workspace, channel } = useParams<{ workspace: string; channel: string }>();
  const { data: myData } = useSWR('/api/users', fetcher);
  const [chat, onChangeChat, setChat] = useInput('');

  const [showInviteChannelModal, setShowInviteChannelModal] = useState(false);

  const onSubmitForm = useCallback((e: { preventDefault: () => void }) => {
    e.preventDefault();
  }, []);

  return (
    <Container>
      <Header>
        <span>채널</span>
      </Header>
      <ChatList chat={''} />
      <ChatBox chat={''} onChangeChat={onChangeChat} onSubmitForm={onSubmitForm} />
      {/* <InviteChannelModal
        show={showInviteChannelModal}
        onCloseModal={onCloseModal}
        setShowInviteChannelModal={setShowInviteChannelModal}
      /> */}
    </Container>
  );
};

export default Channel;
