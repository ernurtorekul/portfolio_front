import LineBar from './LineBar';
import { SKILLS } from '../../constants/constants';
import UseLanguage from '../../lang/useLanguage';
const Skills = () => {
  const {t} = UseLanguage()
  return (
    <div className='flex flex-col space-y-1 pt-6 p-2 '>
      <div className='flex flex-col gap-y-4'>
        <span className='text-md font-bold '>{t("sidebar.skills.h1")}</span>
        <div className='flex flex-col space-y-4 mb-1'>
          {SKILLS.map((skill, index) => {
            return <LineBar key={index} title={skill.title} percent={skill.percent} bgColor='bg-white' />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
