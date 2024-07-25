import React from 'react';
import AnalogClock from '../components/AnalogClock';
import Slider from '../components/Slider';
import ShareButton from '../components/ShareButton';
import axios from 'axios';


const ClockPage = () => {
  const [quotes, setQuotes] = useState('')

  setTimeout(() => {
    const generateQuotes = async () => {
      try {
        const response = await axios.get('https://api.api-ninjas.com/v1/quotes?category=funny', {
          headers: {
            'X-Api-Key':
              'rjqlyo0MUIpxW6CEJzdGzg==0JpnykUlhXFhBYGi'
          }
        });
        setQuotes(response.quote);
        console.log(response.quote);
      } catch (error) {
        console.error('Error fetching quotes:', error);
      }
    };

    generateQuotes();
  }, 5000);
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white">
      <AnalogClock />
      <Slider />
      <ShareButton />

      {quotes}
    </div>
  );
};

export default ClockPage;
