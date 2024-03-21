import React, { useState } from "react";
import { Box, Heading, Text, Button, Input, Textarea, Image, Avatar, Flex, IconButton, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { FaThumbsUp, FaComment, FaShare, FaEllipsisH } from "react-icons/fa";

const Index = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      author: {
        name: "John Doe",
        avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtYW4lMjBwb3J0cmFpdHxlbnwwfHx8fDE3MTEwMzc4MjF8MA&ixlib=rb-4.0.3&q=80&w=1080",
      },
      content: "Just had a great day at the beach!",
      image: "https://images.unsplash.com/photo-1591017403286-fd8493524e1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MXwxfHNlYXJjaHwxfHxiZWFjaHxlbnwwfHx8fDE3MTEwMzc4MjJ8MA&ixlib=rb-4.0.3&q=80&w=1080",
      likes: 25,
      comments: [
        {
          id: 1,
          author: {
            name: "Jane Smith",
            avatar: "https://images.unsplash.com/photo-1557053910-d9eadeed1c58?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHBvcnRyYWl0fGVufDB8fHx8MTcxMTAzNzgyMnww&ixlib=rb-4.0.3&q=80&w=1080",
          },
          content: "Looks amazing! Wish I was there.",
        },
      ],
    },
  ]);

  const [newPost, setNewPost] = useState("");

  const handlePostSubmit = () => {
    if (newPost.trim() !== "") {
      const post = {
        id: posts.length + 1,
        author: {
          name: "Current User",
          avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwZXJzb24lMjBwb3J0cmFpdHxlbnwwfHx8fDE3MTEwMzc4MjN8MA&ixlib=rb-4.0.3&q=80&w=1080",
        },
        content: newPost,
        likes: 0,
        comments: [],
      };
      setPosts([post, ...posts]);
      setNewPost("");
    }
  };

  return (
    <Box maxW="600px" mx="auto" py={8}>
      <Heading mb={8}>Facebook Clone</Heading>

      <Box mb={8}>
        <Textarea value={newPost} onChange={(e) => setNewPost(e.target.value)} placeholder="What's on your mind?" mb={2} />
        <Button colorScheme="blue" onClick={handlePostSubmit}>
          Post
        </Button>
      </Box>

      {posts.map((post) => (
        <Box key={post.id} borderWidth={1} borderRadius="md" p={4} mb={4}>
          <Flex alignItems="center" mb={4}>
            <Avatar src={post.author.avatar} mr={2} />
            <Text fontWeight="bold">{post.author.name}</Text>
          </Flex>
          <Text mb={4}>{post.content}</Text>
          {post.image && <Image src={post.image} mb={4} />}
          <Flex alignItems="center" justifyContent="space-between">
            <Flex>
              <Button leftIcon={<FaThumbsUp />} variant="ghost" mr={2} size="sm">
                {post.likes} Likes
              </Button>
              <Button leftIcon={<FaComment />} variant="ghost" size="sm">
                {post.comments.length} Comments
              </Button>
            </Flex>
            <IconButton icon={<FaEllipsisH />} variant="ghost" size="sm" aria-label="More options" />
          </Flex>

          {post.comments.map((comment) => (
            <Box key={comment.id} mt={4}>
              <Flex alignItems="center" mb={2}>
                <Avatar src={comment.author.avatar} mr={2} size="sm" />
                <Text fontWeight="bold" fontSize="sm">
                  {comment.author.name}
                </Text>
              </Flex>
              <Text fontSize="sm">{comment.content}</Text>
            </Box>
          ))}
        </Box>
      ))}
    </Box>
  );
};

export default Index;
