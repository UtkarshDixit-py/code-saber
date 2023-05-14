import ProblemItem from "./ProblemItem";
function ProblemList() {

   const data = {
        "problems": [
          {
            "id": "1",
            "title": "Two Sum",
            "difficulty": "Easy",
            "acceptanceRate": "47.7%"
          },
          {
            "id": "2",
            "title": "Add Two Numbers",
            "difficulty": "Medium",
            "acceptanceRate": "35.6%"
          },
          {
            "id": "3",
            "title": "Longest Substring Without Repeating Characters",
            "difficulty": "Medium",
            "acceptanceRate": "31.2%"
          },
          {
            "id": "4",
            "title": "Median of Two Sorted Arrays",
            "difficulty": "Hard",
            "acceptanceRate": "30.8%"
          },
          {
            "id": "5",
            "title": "Reverse Integer",
            "difficulty": "Easy",
            "acceptanceRate": "26.6%"
          },
          {
            "id": "6",
            "title": "Palindrome Number",
            "difficulty": "Easy",
            "acceptanceRate": "45.8%"
          },
          {
            "id": "7",
            "title": "ZigZag Conversion",
            "difficulty": "Medium",
            "acceptanceRate": "34.2%"
          },
          {
            "id": "8",
            "title": "Container With Most Water",
            "difficulty": "Medium",
            "acceptanceRate": "42.9%"
          },
          {
            "id": "9",
            "title": "Integer to Roman",
            "difficulty": "Medium",
            "acceptanceRate": "52.2%"
          },
          {
            "id": "10",
            "title": "Longest Common Prefix",
            "difficulty": "Easy",
            "acceptanceRate": "38.1%"
          }
        ]
      }      

    const problems = data.problems;

  return (
    <>
    <h1>Problems</h1>
    {problems.map((question)=>(
        <ProblemItem question={question} key={question.id}/>
    ))}
    </>
  )
}

export default ProblemList