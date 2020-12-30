import { ExpansionEnum } from './../enums/expansion.enum';

export interface CivilizationElementInterface {
  id:                 number;
  name:               string;
  expansion:          ExpansionEnum;
  army_type:          string;
  unique_unit:        string[];
  unique_tech:        string[];
  team_bonus:         string;
  civilization_bonus: string[];
}
