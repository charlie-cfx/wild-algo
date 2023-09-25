/**
 * In this challenge, you have to add a list of skills to each group (based on
 * students skills in the group). Duplicates skills for one group is not permitted. Skills must be
 * sorted alphabetically. Groups order, students order and students skills order must remain
 * untouched.
 *
 * @param groups List of groups without skills, but with students
 * @returns List of groups with a new prop skills
 */

// ↓ uncomment bellow lines and add your response!

export default function ({ groups }: { groups: Group[] }): GroupWithSills[] {
  let finalArray: GroupWithSills[] = [];

  for (let i = 0; i < groups.length; i++) {
    let currentGroup: GroupWithSills = {
      name: groups[i].name,
      students: groups[i].students,
      skills: [],
    };
    let groupSkills: string[] = [];
    for (let j = 0; j < groups[i].students.length; j++) {
      for (let skill of groups[i].students[j].skills) {
        groupSkills.push(skill);
      }
    }
    groupSkills.sort((a, b) => a.localeCompare(b) - b.localeCompare(a));

    currentGroup = { ...currentGroup, skills: [...new Set(groupSkills)] };
    finalArray.push(currentGroup);
  }
  return finalArray;
}


// export default function ({ groups }: { groups: Group[] }): GroupWithSills[] {
//     return groups.map(group => {
//       const groupSkills = group.students.map(student => student.skills);
//       const uniqueSkills = [...new Set(groupSkills)].sort();
//       return {
//         name: group.name,
//         students: group.students,
//         skills: uniqueSkills,
//       };
//     });
//   }
  
// export default function ({ groups }: { groups: Group[] }): GroupWithSills[] {
//   let finalGroupsArray: GroupWithSills[] = [];
//   groups.map((group) => {
//     let groupWithSkills: GroupWithSills = {
//       ...group,
//       skills: [],
//     };

//     group.students.map((student) => {
//       student.skills.map((skill) => {
//         groupWithSkills.skills.push(skill);
//       });
//     });

//     groupWithSkills.skills = [...new Set(groupWithSkills.skills)];

//     groupWithSkills.skills.sort((a, b) => {
//       return a.localeCompare(b);
//     });

//     finalGroupsArray.push(groupWithSkills);
//   });

//   return finalGroupsArray;
// }

// used interfaces, do not touch
interface Student {
  name: string;
  age: number;
  skills: string[];
}

export interface Group {
  students: Student[];
  name: string;
}

export interface GroupWithSills extends Group {
  skills: string[];
}
