const Message = () => {
  return (
    <div className='chat chat-end'>
      <div className='chat-image avatar'>
        <div className='w-10 rounded-full'>
          <img
            src='https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/2020-07/SFBA_San%20Francisco_Golden%20Gate%20Bridge.jpeg'
            alt='user avatar'
          />
        </div>
      </div>

      <div className={`chat-bubble text-white bg-blue-500`}>
        Yo! What is upp?
      </div>
      <div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>
        11:11
      </div>
    </div>
  );
};

export default Message;
