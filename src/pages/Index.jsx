import { useState } from "react";
import { Container, Text, VStack, Button, HStack, Box, useToast } from "@chakra-ui/react";
import { FaCheck, FaTimes } from "react-icons/fa";

const hiragana = [
  { char: "あ", romaji: "a" },
  { char: "い", romaji: "i" },
  { char: "う", romaji: "u" },
  { char: "え", romaji: "e" },
  { char: "お", romaji: "o" },
  // Add more hiragana characters here
];

const katakana = [
  { char: "ア", romaji: "a" },
  { char: "イ", romaji: "i" },
  { char: "ウ", romaji: "u" },
  { char: "エ", romaji: "e" },
  { char: "オ", romaji: "o" },
  // Add more katakana characters here
];

const getRandomKana = (kanaArray) => kanaArray[Math.floor(Math.random() * kanaArray.length)];

const Index = () => {
  const [currentKana, setCurrentKana] = useState(getRandomKana(hiragana));
  const [input, setInput] = useState("");
  const [score, setScore] = useState(0);
  const toast = useToast();

  const handleInputChange = (e) => setInput(e.target.value.toLowerCase());

  const checkAnswer = () => {
    if (input === currentKana.romaji) {
      setScore(score + 1);
      toast({
        title: "Correct!",
        description: "You got it right!",
        status: "success",
        duration: 2000,
        isClosable: true,
        icon: <FaCheck />,
      });
    } else {
      toast({
        title: "Incorrect!",
        description: `The correct answer was ${currentKana.romaji}`,
        status: "error",
        duration: 2000,
        isClosable: true,
        icon: <FaTimes />,
      });
    }
    setInput("");
    setCurrentKana(getRandomKana(hiragana));
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">Learn Hiragana and Katakana</Text>
        <Box fontSize="6xl">{currentKana.char}</Box>
        <HStack>
          <input value={input} onChange={handleInputChange} placeholder="Enter romaji" />
          <Button onClick={checkAnswer}>Submit</Button>
        </HStack>
        <Text>Score: {score}</Text>
      </VStack>
    </Container>
  );
};

export default Index;
