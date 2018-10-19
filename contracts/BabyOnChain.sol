pragma solidity ^0.4.24;

import "../node_modules/openzeppelin-solidity/contracts/ownership/Ownable.sol";

contract BabyOnChain is
    Ownable
{
    string public name = "Who are you?";
    string public birthday = "20181018";
    uint256 public timestamp = 1539871627;
    uint256 public weight = 35;
    uint256 public height = 51;
    string public sex = "girl";
    string public fatherName = "熊炜";
    string public motherName = "沈雨婷";

    constructor () public {
        owner = msg.sender;
    }

    function named(string yourName) public onlyOwner {
        name = yourName;
    }
}
